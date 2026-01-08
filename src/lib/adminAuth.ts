import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

/**
 * Check if the current user has admin role via RPC call to has_role function
 */
export async function checkIsAdmin(
  client: SupabaseClient<Database>
): Promise<boolean> {
  const { data: { user } } = await client.auth.getUser();
  
  if (!user) return false;
  
  const { data, error } = await client.rpc('has_role', {
    _user_id: user.id,
    _role: 'admin'
  });
  
  if (error) {
    console.error('Error checking admin role:', error);
    return false;
  }
  
  return data === true;
}

/**
 * Get the current authenticated user
 */
export async function getCurrentUser(client: SupabaseClient<Database>) {
  const { data: { user } } = await client.auth.getUser();
  return user;
}
