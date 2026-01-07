import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code } = req.query;

  if (!code || typeof code !== "string") {
    return res.redirect("/admin/login?error=missing_code");
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables");
    return res.redirect("/admin/login?error=server_error");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

    const cookie = [
  `sb-session=${access_token}`,
  `HttpOnly`,
  `Path=/`,
  `SameSite=Lax`,
  `Secure`,
  `Domain=summitbuildings.vercel.app`,
].join("; ");

res.setHeader("Set-Cookie", cookie);
res.status(302);
res.setHeader("Location", "/admin");
res.end();
return;

    return res.redirect("/admin");
  } catch (err) {
    console.error("Callback error:", err);
    return res.redirect("/admin/login?error=unexpected");
  }
}
