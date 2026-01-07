import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // ⚠️ AUTH GUARD BYPASSED FOR TESTING
  // Normally we would redirect to /admin/login if !user
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!loading && !user) {
  //     navigate("/admin/login");
  //   }
  // }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Testing banner */}
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded">
          <strong>⚠️ Auth guard bypassed for testing</strong>
          <p className="text-sm mt-1">
            Authentication checks are temporarily disabled.
          </p>
        </div>

        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>

        {/* Session status */}
        <div className="p-4 border rounded-lg bg-card">
          <h2 className="font-semibold mb-2">Session Status</h2>
          {user ? (
            <div className="space-y-2 text-sm">
              <p className="text-green-600 font-medium">✓ Authenticated</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>User ID:</strong> {user.id}</p>
              <p><strong>Session expires:</strong> {session?.expires_at ? new Date(session.expires_at * 1000).toLocaleString() : "N/A"}</p>
            </div>
          ) : (
            <p className="text-red-600">✗ No session found</p>
          )}
        </div>

        {/* Cookie debug info */}
        <div className="p-4 border rounded-lg bg-card">
          <h2 className="font-semibold mb-2">Browser Cookies</h2>
          <pre className="text-xs bg-muted p-2 rounded overflow-auto">
            {document.cookie || "(no cookies visible to JS - HttpOnly cookies are hidden)"}
          </pre>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={() => supabase.auth.signOut()}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded hover:opacity-90"
          >
            Sign Out
          </button>
          <a
            href="/admin/login"
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded hover:opacity-90"
          >
            Go to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Admin;
