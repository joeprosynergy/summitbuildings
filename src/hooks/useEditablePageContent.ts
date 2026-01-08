import { useState, useEffect, useCallback } from 'react';
import { isBackendAvailable, getBackendClient } from '@/lib/backendClient';
import { toast } from 'sonner';

export interface PageContent {
  heading: string;
  tagline: string;
  subheading: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaButton: string;
  metaTitle: string;
  metaDescription: string;
}

export function useEditablePageContent(slug: string, defaultContent: PageContent) {
  const [content, setContent] = useState<PageContent>(defaultContent);
  const [editedContent, setEditedContent] = useState<PageContent>(defaultContent);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

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

      const { data, error } = await client
        .from('page_content')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (data && !error) {
        const fetched: PageContent = {
          heading: data.heading ?? defaultContent.heading,
          tagline: data.tagline ?? defaultContent.tagline,
          subheading: data.subheading ?? defaultContent.subheading,
          ctaHeading: data.cta_heading ?? defaultContent.ctaHeading,
          ctaDescription: data.cta_description ?? defaultContent.ctaDescription,
          ctaButton: data.cta_button ?? defaultContent.ctaButton,
          metaTitle: data.meta_title ?? defaultContent.metaTitle,
          metaDescription: data.meta_description ?? defaultContent.metaDescription,
        };
        setContent(fetched);
        setEditedContent(fetched);
      }
      setIsLoading(false);
    };

    fetchContent();
  }, [slug, defaultContent]);

  const hasChanges = JSON.stringify(content) !== JSON.stringify(editedContent);

  const save = useCallback(async () => {
    const client = getBackendClient();
    if (!client) return;

    setIsSaving(true);
    const { error } = await client
      .from('page_content')
      .upsert({
        slug,
        heading: editedContent.heading,
        tagline: editedContent.tagline,
        subheading: editedContent.subheading,
        cta_heading: editedContent.ctaHeading,
        cta_description: editedContent.ctaDescription,
        cta_button: editedContent.ctaButton,
        meta_title: editedContent.metaTitle,
        meta_description: editedContent.metaDescription,
      }, { onConflict: 'slug' });

    if (error) {
      toast.error('Failed to save changes');
      console.error(error);
    } else {
      toast.success('Changes saved');
      setContent(editedContent);
      setIsEditMode(false);
    }
    setIsSaving(false);
  }, [slug, editedContent]);

  const reset = useCallback(() => {
    setEditedContent(content);
    setIsEditMode(false);
  }, [content]);

  const updateField = useCallback((field: keyof PageContent, value: string) => {
    setEditedContent(prev => ({ ...prev, [field]: value }));
  }, []);

  const startEditing = useCallback(() => {
    setIsEditMode(true);
  }, []);

  return {
    content,
    editedContent,
    isLoading,
    isSaving,
    isEditMode,
    hasChanges,
    updateField,
    save,
    reset,
    startEditing,
  };
}
