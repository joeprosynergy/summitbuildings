import { useState, useEffect, useCallback } from 'react';
import { getBackendClient, isBackendAvailable } from '@/lib/backendClient';
import { toast } from 'sonner';

export interface SectionContent {
  [key: string]: string | number | boolean | string[] | Record<string, unknown>;
}

export function useSectionContent<T extends SectionContent>(
  pageSlug: string,
  sectionName: string,
  defaultContent: T
) {
  const [content, setContent] = useState<T>(defaultContent);
  const [editedContent, setEditedContent] = useState<T>(defaultContent);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      if (!isBackendAvailable()) {
        setIsLoading(false);
        return;
      }

      const client = getBackendClient();
      if (!client) {
        setIsLoading(false);
        return;
      }

      // Use any to bypass strict typing for tables not in generated types
      const { data, error } = await (client as any)
        .from('section_content')
        .select('content')
        .eq('page_slug', pageSlug)
        .eq('section_name', sectionName)
        .maybeSingle();

      if (data && !error && data.content) {
        const merged = { ...defaultContent, ...(data.content as T) };
        setContent(merged);
        setEditedContent(merged);
      }
      setIsLoading(false);
    };

    fetchContent();
  }, [pageSlug, sectionName]);

  const hasChanges = JSON.stringify(content) !== JSON.stringify(editedContent);

  const save = useCallback(async () => {
    const client = getBackendClient();
    if (!client) return false;

    setIsSaving(true);
    const { error } = await (client as any)
      .from('section_content')
      .upsert({
        page_slug: pageSlug,
        section_name: sectionName,
        content: editedContent as unknown as Record<string, unknown>,
      }, { onConflict: 'page_slug,section_name' });

    if (error) {
      toast.error('Failed to save section content');
      console.error(error);
      setIsSaving(false);
      return false;
    }
    
    toast.success('Section saved');
    setContent(editedContent);
    setIsSaving(false);
    return true;
  }, [pageSlug, sectionName, editedContent]);

  const reset = useCallback(() => {
    setEditedContent(content);
  }, [content]);

  const updateField = useCallback(<K extends keyof T>(field: K, value: T[K]) => {
    setEditedContent(prev => ({ ...prev, [field]: value }));
  }, []);

  return {
    content: editedContent,
    originalContent: content,
    isLoading,
    isSaving,
    hasChanges,
    updateField,
    save,
    reset,
  };
}
