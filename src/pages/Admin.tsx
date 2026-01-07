import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const { user, loading, signOut } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If not loading and no user, redirect to login
    if (!loading && !user) {
      navigate("/admin/login");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Logged in as: {user.email}
        </p>
        <Button variant="outline" onClick={signOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Admin;
