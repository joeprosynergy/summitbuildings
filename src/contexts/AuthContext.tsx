import { createContext, useContext, useEffect, useState, useMemo, ReactNode } from "react";
import { User, Session, SupabaseClient, createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAdmin: boolean;
  client: SupabaseClient<Database> | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  isAdmin: false,
  client: null,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Create client ONCE at mount, stable across navigation
  const client = useMemo(() => {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY || 
                import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    
    if (!url || !key) {
      if (import.meta.env.DEV) {
        console.warn('[AuthProvider] Supabase env vars not available');
      }
      return null;
    }
    
    return createClient<Database>(url, key, {
      auth: {
        storage: localStorage,
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  }, []);

  useEffect(() => {
    if (!client) {
      setIsLoading(false);
      return;
    }

    // Set up auth state listener FIRST
    const { data: { subscription } } = client.auth.onAuthStateChange(
      async (event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);

        // Check admin role when session changes
        if (newSession?.user) {
          const { data } = await client.rpc("has_role", {
            _user_id: newSession.user.id,
            _role: "admin",
          });
          setIsAdmin(!!data);
        } else {
          setIsAdmin(false);
        }

        setIsLoading(false);
      }
    );

    // Then get initial session
    client.auth.getSession().then(async ({ data: { session: initialSession } }) => {
      setSession(initialSession);
      setUser(initialSession?.user ?? null);

      if (initialSession?.user) {
        const { data } = await client.rpc("has_role", {
          _user_id: initialSession.user.id,
          _role: "admin",
        });
        setIsAdmin(!!data);
      }

      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [client]);

  return (
    <AuthContext.Provider value={{ user, session, isLoading, isAdmin, client }}>
      {children}
    </AuthContext.Provider>
  );
}