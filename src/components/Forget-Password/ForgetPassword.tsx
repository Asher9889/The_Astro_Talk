import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { axios } from "@/api";
import { toast } from "sonner";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const res = await axios.post("/auth/forget-password", { email });
      if(res.status !== 200){
        toast.error(res.data.message, {id: "auth"});
      }
      setStatus("success");
      toast.success(res.data.message, {id: "auth"})
      setMessage(res.data.message || "Reset link sent to your email.");
    } catch (error: any) {
      setStatus("error");
      toast.error(error.response.data.message);
      setMessage(error?.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex min-h-[85vh] md:min-h-[90vh] flex-col items-center justify-center text-(--color-primary-background) py-12 px-4 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-(--color-text-primary) dark:text-gray-50">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-(--color-text-secondary) dark:text-gray-400">
            Enter the email address associated with your account and we'll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="text-gray-600"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-(--color-button-primary) hover:bg-(--color-link) hover:scale-[0.99]"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Reset password"}
          </Button>
        </form>

        {message && (
          <div
            className={`text-sm text-center ${
              status === "error"
                ? "text-red-600 dark:text-red-400"
                : "text-green-600 dark:text-green-400"
            }`}
          >
            {message}
          </div>
        )}

        <div className="flex justify-center">
          <Link
            to="/register"
            className="text-sm font-medium text-(--color-text-primary) hover:text-(--color-text-secondary)"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
