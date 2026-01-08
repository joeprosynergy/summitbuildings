import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

let clientInstance: SupabaseClient<Database> | null = null;
let initAttempted = false;

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
 * - Preview: returns null, page falls back to static content
 * - Production: Supabase must be present
 */
export function getBackendClient(): SupabaseClient<Database> | null {
  if (clientInstance) return clientInstance;
  if (initAttempted) return null;
  
  initAttempted = true;
  
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY || 
              import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  
  if (!url || !key) {
    if (import.meta.env.DEV) {
      console.warn('[backendClient] Supabase env vars not available - using fallback content');
    }
    return null;
  }
  
  clientInstance = createClient<Database>(url, key);
  
  return clientInstance;
}
