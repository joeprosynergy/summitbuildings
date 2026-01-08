import { useState, useEffect, useCallback } from 'react';
import type { User } from '@supabase/supabase-js';
import { getBackendClient } from '@/lib/backendClient';
import { checkIsAdmin } from '@/lib/adminAuth';

interface AdminAuthState {
  user: User | null;
  isAdmin: boolean;
  isLoading: boolean;
  error: string | null;
  recheckAdmin: () => Promise<void>;
}

export function useAdminAuth(): AdminAuthState {
  const [state, setState] = useState<Omit<AdminAuthState, 'recheckAdmin'>>({
    user: null,
    isAdmin: false,
    isLoading: true,
    error: null,
  });

  const recheckAdmin = useCallback(async () => {
    const client = getBackendClient();
    if (!client || !state.user) return;
    
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    const result = await checkIsAdmin(client);
    setState(prev => ({ 
      ...prev, 
      isAdmin: result.isAdmin, 
      isLoading: false, 
      error: result.error 
    }));
  }, [state.user]);

  useEffect(() => {
    const client = getBackendClient();
    
    if (!client) {
      setState({ user: null, isAdmin: false, isLoading: false, error: 'Backend not configured' });
      return;
    }

    let mounted = true;

    // Set up auth listener first
    const { data: { subscription } } = client.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;
        
        if (!session?.user) {
          setState({ user: null, isAdmin: false, isLoading: false, error: null });
          return;
        }

        const result = await checkIsAdmin(client);
        
        if (mounted) {
          setState({ 
            user: session.user, 
            isAdmin: result.isAdmin, 
            isLoading: false, 
            error: result.error 
          });
        }
      }
    );

    // Then check initial session
    const checkInitialAuth = async () => {
      const { data: { user } } = await client.auth.getUser();
      
      if (!mounted) return;
      
      if (!user) {
        setState({ user: null, isAdmin: false, isLoading: false, error: null });
        return;
      }

      const result = await checkIsAdmin(client);
      
      if (mounted) {
        setState({ 
          user, 
          isAdmin: result.isAdmin, 
          isLoading: false, 
          error: result.error 
        });
      }
    };

    checkInitialAuth();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return { ...state, recheckAdmin };
}
