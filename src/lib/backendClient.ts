import { supabase } from '@/integrations/supabase/client';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

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
 * Returns the shared Supabase client or null if env vars are missing.
 * Uses the official auto-generated client to ensure consistent auth state.
 */
export function getBackendClient(): SupabaseClient<Database> | null {
  if (!isBackendAvailable()) {
    return null;
  }
  return supabase;
}
