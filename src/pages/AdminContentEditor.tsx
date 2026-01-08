import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { getBackendClient } from '@/lib/backendClient';
import { toast } from 'sonner';

interface PageContent {
  id: string;
  slug: string;
  heading: string | null;
  tagline: string | null;
  subheading: string | null;
  cta_heading: string | null;
  cta_description: string | null;
  cta_button: string | null;
  meta_title: string | null;
  meta_description: string | null;
}

const AdminContentEditor = () => {
  const navigate = useNavigate();
  const { isAdmin, isLoading: authLoading } = useAdminAuth();
  const [pages, setPages] = useState<PageContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [savingSlug, setSavingSlug] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate('/admin');
      return;
    }

    const fetchPages = async () => {
      const client = getBackendClient();
      if (!client) return;

      const { data, error } = await client
        .from('page_content')
        .select('*')
        .order('slug');

      if (error) {
        console.error('Error fetching pages:', error);
        toast.error('Failed to load pages');
      } else {
        setPages(data || []);
      }
      setIsLoading(false);
    };

    if (isAdmin) {
      fetchPages();
    }
  }, [isAdmin, authLoading, navigate]);

  const handleFieldChange = (slug: string, field: keyof PageContent, value: string) => {
    setPages(pages.map(page =>
      page.slug === slug ? { ...page, [field]: value } : page
    ));
  };

  const handleSave = async (page: PageContent) => {
    const client = getBackendClient();
    if (!client) return;

    setSavingSlug(page.slug);

    const { error } = await client
      .from('page_content')
      .update({
        heading: page.heading,
        tagline: page.tagline,
        subheading: page.subheading,
        cta_heading: page.cta_heading,
        cta_description: page.cta_description,
        cta_button: page.cta_button,
        meta_title: page.meta_title,
        meta_description: page.meta_description,
      })
      .eq('slug', page.slug);

    if (error) {
      console.error('Error saving page:', error);
      toast.error('Failed to save changes');
    } else {
      toast.success('Changes saved');
    }

    setSavingSlug(null);
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/admin')}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Content Editor</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {pages.map((page) => (
            <Card key={page.slug}>
              <CardHeader>
                <CardTitle className="capitalize">{page.slug} Page</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Heading</label>
                    <Input
                      value={page.heading || ''}
                      onChange={(e) => handleFieldChange(page.slug, 'heading', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tagline</label>
                    <Input
                      value={page.tagline || ''}
                      onChange={(e) => handleFieldChange(page.slug, 'tagline', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Subheading</label>
                  <Textarea
                    value={page.subheading || ''}
                    onChange={(e) => handleFieldChange(page.slug, 'subheading', e.target.value)}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">CTA Heading</label>
                    <Input
                      value={page.cta_heading || ''}
                      onChange={(e) => handleFieldChange(page.slug, 'cta_heading', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">CTA Button</label>
                    <Input
                      value={page.cta_button || ''}
                      onChange={(e) => handleFieldChange(page.slug, 'cta_button', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">CTA Description</label>
                  <Textarea
                    value={page.cta_description || ''}
                    onChange={(e) => handleFieldChange(page.slug, 'cta_description', e.target.value)}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Meta Title</label>
                    <Input
                      value={page.meta_title || ''}
                      onChange={(e) => handleFieldChange(page.slug, 'meta_title', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Meta Description</label>
                    <Input
                      value={page.meta_description || ''}
                      onChange={(e) => handleFieldChange(page.slug, 'meta_description', e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => handleSave(page)}
                    disabled={savingSlug === page.slug}
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {savingSlug === page.slug ? 'Saving...' : 'Save'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminContentEditor;
