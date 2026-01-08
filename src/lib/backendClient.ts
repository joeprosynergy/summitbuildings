import { supabase } from '@/integrations/supabase/client';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

/**
 * Check if Supabase client is available.
 * Use this before attempting queries to avoid crashes.
 */
export function isBackendAvailable(): boolean {
  return supabase !== null;
}

/**
 * Returns the shared Supabase client or null if not available.
 */
export function getBackendClient(): SupabaseClient<Database> | null {
  return supabase;
}
