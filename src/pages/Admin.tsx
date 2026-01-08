import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { LogOut, Settings, Users, FileText, ShieldX, ChevronDown, RefreshCw } from "lucide-react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { getBackendClient } from "@/lib/backendClient";

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, isLoading, error, recheckAdmin } = useAdminAuth();
  const client = getBackendClient();
  const [isRechecking, setIsRechecking] = useState(false);
  const [debugOpen, setDebugOpen] = useState(false);

  const handleLogout = async () => {
    if (client) {
      await client.auth.signOut();
    }
    navigate("/admin/login");
  };

  const handleRecheck = async () => {
    setIsRechecking(true);
    await recheckAdmin();
    setIsRechecking(false);
  };

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm space-y-4 text-center">
          <h1 className="text-xl font-semibold text-foreground">Admin Unavailable</h1>
          <p className="text-sm text-muted-foreground">
            Backend is not configured in this environment.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) {
    navigate("/admin/login");
    return null;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-md space-y-6 text-center">
          <ShieldX className="w-16 h-16 mx-auto text-destructive" />
          <h1 className="text-xl font-semibold text-foreground">Access Denied</h1>
          <p className="text-sm text-muted-foreground">
            You don't have admin privileges. Contact an administrator if you believe this is an error.
          </p>
          
          <div className="flex flex-col gap-3">
            <Button 
              variant="secondary" 
              onClick={handleRecheck} 
              disabled={isRechecking}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRechecking ? 'animate-spin' : ''}`} />
              Re-check Admin Role
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          <Collapsible open={debugOpen} onOpenChange={setDebugOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                <ChevronDown className={`w-3 h-3 mr-1 transition-transform ${debugOpen ? 'rotate-180' : ''}`} />
                Troubleshooting Details
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="text-left bg-muted/50 rounded-lg p-4 text-xs space-y-2 font-mono">
                <p><span className="text-muted-foreground">User ID:</span> {user.id}</p>
                <p><span className="text-muted-foreground">Email:</span> {user.email}</p>
                <p><span className="text-muted-foreground">Checked at:</span> {new Date().toISOString()}</p>
                {error && (
                  <p className="text-destructive"><span className="text-muted-foreground">Error:</span> {error}</p>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Content
              </CardTitle>
              <CardDescription>Manage site content and pages</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full" onClick={() => navigate('/admin/content')}>
                Manage Content
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Users
              </CardTitle>
              <CardDescription>View and manage user accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">
                Manage Users
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Settings
              </CardTitle>
              <CardDescription>Configure site settings</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">
                Open Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;
