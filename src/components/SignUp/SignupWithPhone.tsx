import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input, Button,  Spinner } from "../ui";
import {  useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PasswordInput } from "@/components";
import { PhoneInput } from "@/components";
import { registerFormSchema } from "@/lib/validation-schemas";
import { axios } from "@/api";
import { toast } from "sonner";
import { useState } from "react";

type Props = {
  onSuccess: () => void;
};

const formSchema = registerFormSchema;

function Register({onSuccess}: Props) {
  const [loading, setLoading] = useState(false);
  

  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if(loading) return;
    try {
      setLoading(true);
      const res = await axios.post("/auth/register",  values)

      if(res.status !== 200){
        return toast.error(res.data.message || "Failed to create user");
      }
      toast.success(res.data.message, {id: "auth"});
      onSuccess?.(); // ✅ close dialog
      navigate("/register")
    } catch (e:any) {
      console.error("Form submission error", e);
      toast.error(e.response.data.message || e.response.statusText, {
       position: "top-center",
       id: "auth"
      });
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[60vh] w-full items-center text-[var(--color-text-primary)]">
      <Card className="mx-auto w-full md:max-w-md border">
        <CardHeader>
          <CardTitle className="text-2xl text-[var(--color-text-primary)]">
            Register
          </CardTitle>
          <CardDescription className="text-[var(--color-text-secondary)]">
            Create a new account by filling out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="name" className="text-[var(--color-text-primary)]">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...field}
                          className="border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email" className="text-[var(--color-text-primary)]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="johndoe@mail.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                          className="border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="phone" className="text-[var(--color-text-primary)]">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <PhoneInput
                          {...field}
                          defaultCountry="IN"
                          className=" text-[var(--color-text-primary)]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="password" className="text-[var(--color-text-primary)]">
                        Password
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
                      <FormLabel htmlFor="confirmPassword" className="text-[var(--color-text-primary)]">
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
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[var(--color-button-primary)] text-[var(--color-button-text)] hover:bg-[var(--color-button-secondary)]"
                >
                  {loading ? <Spinner /> : "Register"}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm text-[var(--color-text-secondary)]">
            Already have an account?{" "}
            <button onClick={() => onSuccess?.()} className="underline text-[var(--color-link)] hover:text-[var(--color-button-primary)]">
              Login
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const SignupWithPhone = () => {
  const [openDialogBox, setOpenDialogBox] = useState(false);
  return (
    <Dialog open={openDialogBox} onOpenChange={setOpenDialogBox}>
      <DialogTrigger className="underline text-[var(--color-button-primary))]">Sign up</DialogTrigger>
      <DialogContent>
        <Register onSuccess={() => setOpenDialogBox(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default SignupWithPhone;












