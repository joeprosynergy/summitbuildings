import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

let clientInstance: SupabaseClient<Database> | null = null;

function getSupabaseUrl(): string {
  const url = import.meta.env.VITE_SUPABASE_URL;
  if (url) return url;
  
  const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
  if (projectId) return `https://${projectId}.supabase.co`;
  
  throw new Error('Backend URL not configured');
}

function getSupabaseKey(): string {
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (key) return key;
  
  throw new Error('Backend key not configured');
}

export function getBackendClient(): SupabaseClient<Database> {
  if (clientInstance) return clientInstance;
  
  const url = getSupabaseUrl();
  const key = getSupabaseKey();
  
  clientInstance = createClient<Database>(url, key, {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    }
  });
  
  return clientInstance;
}
