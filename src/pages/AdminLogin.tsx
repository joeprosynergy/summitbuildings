import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAdminAuth } from "@/hooks/useAdminAuth";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const { user, loading } = useAdminAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (!loading && user) {
      navigate("/admin");
    }
  }, [loading, user, navigate]);

  const handleSendLink = async () => {
    setMessage(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/send-magic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Check your email for the login link" });
      } else {
        setMessage({ type: "error", text: data.error || "Something went wrong" });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to send request" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center text-foreground">
          Admin Login
        </h1>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="w-full" onClick={handleSendLink} disabled={isLoading}>
            {isLoading ? "Sending..." : "Send login link"}
          </Button>
          {message && (
            <p className={`text-sm text-center ${message.type === "success" ? "text-green-600" : "text-destructive"}`}>
              {message.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
