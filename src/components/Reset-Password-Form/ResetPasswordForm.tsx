import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PasswordInput from "../password-input/PasswordInput";
import axios from "axios";
import { useState } from "react";

// ✅ New schema only for password reset
const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordFormType = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const form = useForm<ResetPasswordFormType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // ✅ Submit handler
  const onSubmit = async (data: ResetPasswordFormType) => {
    try {
      setLoading(true);
      setMessage(null);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/reset-password/${token}`,
        { password: data.password }
      );

      setMessage("Password reset successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[85vh] md:min-h-[90vh] flex-col items-center justify-center text-(--color-primary-background) py-12 px-4 dark:bg-gray-950">
      <Card className="mx-auto w-full md:max-w-md border">
        <CardHeader>
          <CardTitle className="text-2xl text-[var(--color-text-primary)]">
            Reset Password
          </CardTitle>
          <CardDescription className="text-[var(--color-text-secondary)]">
            Enter your new password below.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <div className="grid gap-4">
                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel
                        htmlFor="password"
                        className="text-[var(--color-text-primary)]"
                      >
                        New Password
                      </FormLabel>
                      <FormControl>
                        <PasswordInput
                          id="password"
                          placeholder="******"
                          autoComplete="new-password"
                          {...field}
                          className="border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Confirm Password Field */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel
                        htmlFor="confirmPassword"
                        className="text-[var(--color-text-primary)]"
                      >
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <PasswordInput
                          id="confirmPassword"
                          placeholder="******"
                          autoComplete="new-password"
                          {...field}
                          className="border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)]"
                        />
                      </FormControl>
                      <FormMessage className="" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[var(--color-button-primary)] text-[var(--color-button-text)] hover:bg-[var(--color-button-secondary)]"
                  disabled={loading}
                >
                  {loading ? "Resetting..." : "Set New Password"}
                </Button>
              </div>
            </form>
          </Form>

          {message && (
            <div
              className={`mt-4 text-center text-sm ${
                message.includes("success")
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {message}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
