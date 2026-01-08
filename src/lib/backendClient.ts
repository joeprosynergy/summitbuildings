import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

let clientInstance: SupabaseClient<Database> | null = null;

/**
 * Check if Supabase environment variables are available.
 * Use this before attempting queries to avoid crashes.
 */
export function isBackendAvailable(): boolean {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY || 
              import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  return Boolean(url && key);
}

/**
 * Returns Supabase client or null if env vars are missing.
 * Always returns the same singleton instance once created.
 */
export function getBackendClient(): SupabaseClient<Database> | null {
  // Return existing singleton
  if (clientInstance) return clientInstance;
  
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY || 
              import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  
  // If env vars missing, return null (can retry later)
  if (!url || !key) {
    if (import.meta.env.DEV) {
      console.warn('[backendClient] Supabase env vars not available - using fallback content');
    }
    return null;
  }
  
  // Create and cache singleton
  clientInstance = createClient<Database>(url, key, {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    },
  });
  
  return clientInstance;
}
