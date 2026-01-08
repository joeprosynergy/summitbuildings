import { useState, useEffect } from 'react';
import type { User } from '@supabase/supabase-js';
import { getBackendClient } from '@/lib/backendClient';
import { checkIsAdmin } from '@/lib/adminAuth';

interface AdminAuthState {
  user: User | null;
  isAdmin: boolean;
  isLoading: boolean;
}

export function useAdminAuth(): AdminAuthState {
  const [state, setState] = useState<AdminAuthState>({
    user: null,
    isAdmin: false,
    isLoading: true,
  });

  useEffect(() => {
    const client = getBackendClient();
    
    if (!client) {
      setState({ user: null, isAdmin: false, isLoading: false });
      return;
    }

    let mounted = true;

    const checkAuth = async () => {
      const { data: { user } } = await client.auth.getUser();
      
      if (!mounted) return;
      
      if (!user) {
        setState({ user: null, isAdmin: false, isLoading: false });
        return;
      }

      const isAdmin = await checkIsAdmin(client);
      
      if (mounted) {
        setState({ user, isAdmin, isLoading: false });
      }
    };

    checkAuth();

    const { data: { subscription } } = client.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;
        
        if (!session?.user) {
          setState({ user: null, isAdmin: false, isLoading: false });
          return;
        }

        const isAdmin = await checkIsAdmin(client);
        
        if (mounted) {
          setState({ user: session.user, isAdmin, isLoading: false });
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return state;
}
