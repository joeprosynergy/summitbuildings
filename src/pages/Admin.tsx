const Admin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          You have successfully accessed the admin area.
        </p>
        <p className="text-sm text-muted-foreground">
          (Auth guards are currently bypassed for testing)
        </p>
      </div>
    </div>
  );
};

export default Admin;
