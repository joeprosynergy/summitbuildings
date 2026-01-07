import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code } = req.query;

  if (!code || typeof code !== "string") {
    return res.redirect("/admin/login?error=missing_code");
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Missing Supabase environment variables");
    return res.redirect("/admin/login?error=server_error");
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error || !data.session) {
      console.error("Auth error:", error?.message);
      return res.redirect("/admin/login?error=auth_failed");
    }

    const { access_token, refresh_token, expires_in } = data.session;

    const isProduction = process.env.NODE_ENV === "production";
    const cookieOptions = [
      `HttpOnly`,
      `Path=/`,
      `SameSite=Lax`,
      `Max-Age=${expires_in}`,
      isProduction ? "Secure" : "",
    ].filter(Boolean).join("; ");

    res.setHeader("Set-Cookie", [
      `sb-access-token=${access_token}; ${cookieOptions}`,
      `sb-refresh-token=${refresh_token}; ${cookieOptions}`,
    ]);

    return res.redirect("/admin");
  } catch (err) {
    console.error("Callback error:", err);
    return res.redirect("/admin/login?error=unexpected");
  }
}
