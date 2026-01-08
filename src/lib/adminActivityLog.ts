import { supabase } from '@/integrations/supabase/client';

interface ActivityLogEntry {
  pageSlug: string;
  action: 'update' | 'publish' | 'rollback';
  fieldPath?: string;
  oldValue?: string;
  newValue?: string;
}

/**
 * Log admin activity - fire-and-forget, does not block UI.
 * Currently logs to console. Can be connected to admin_activity_log table later.
 */
export const logAdminActivity = async (entry: ActivityLogEntry): Promise<void> => {
  if (!supabase) {
    console.log('[Admin Activity] Backend not available, skipping log');
    return;
  }
  
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    const logEntry = {
      userId: user?.id || 'anonymous',
      pageSlug: entry.pageSlug,
      action: entry.action,
      fieldPath: entry.fieldPath,
      oldValue: entry.oldValue,
      newValue: entry.newValue,
      timestamp: new Date().toISOString(),
    };

    // Log to console for now - can be connected to DB table later
    console.log('[Admin Activity]', logEntry);

    // TODO: When admin_activity_log table is created, uncomment:
    // await supabase.from('admin_activity_log').insert({
    //   user_id: user?.id,
    //   page_slug: entry.pageSlug,
    //   action: entry.action,
    //   field_path: entry.fieldPath,
    //   old_value: entry.oldValue,
    //   new_value: entry.newValue,
    // });
  } catch (error) {
    // Fire-and-forget - don't throw, just log
    console.warn('[Admin Activity] Failed to log:', error);
  }
};
