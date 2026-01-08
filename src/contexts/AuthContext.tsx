import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { getBackendClient, isBackendAvailable } from "@/lib/backendClient";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  isAdmin: false,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!isBackendAvailable()) {
      setIsLoading(false);
      return;
    }

    const client = getBackendClient();
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
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, isLoading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}
