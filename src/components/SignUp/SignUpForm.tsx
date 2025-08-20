import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import img from "../../assets/image-signup.jpg" // Assuming you have an image for the right side

const SignUpForm = () => {
  return (
    <Card className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl md:mt-10 md:mb-20">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-semibold text-[var(--color-text-primary)]">
          Sign Up
        </CardTitle>
        <CardDescription className="text-center text-sm text-[var(--color-text-secondary)]">
          Create a new account to get started.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section: Form Fields */}
          <div className="flex flex-col space-y-6">
            {/* First Name */}
            <div>
              <Label htmlFor="firstName" style={{ color: 'var(--color-text-primary)' }}>
                Full Name
              </Label>
              <Input
                id="firstName"
                placeholder="John"
                required
                style={{ borderColor: 'var(--color-border)' }}
                className="mt-2"
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="lastName" style={{ color: 'var(--color-text-primary)' }}>
                User Name
              </Label>
              <Input
                id="lastName"
                placeholder="Doe"
                required
                style={{ borderColor: 'var(--color-border)' }}
                className="mt-2"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" style={{ color: 'var(--color-text-primary)' }}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                required
                style={{ borderColor: 'var(--color-border)' }}
                className="mt-2"
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" style={{ color: 'var(--color-text-primary)' }}>
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                required
                style={{ borderColor: 'var(--color-border)' }}
                className="mt-2"
              />
            </div>

            {/* Date of Birth (DOB) */}
            <div>
              <Label htmlFor="dob" style={{ color: 'var(--color-text-primary)' }}>
                Date of Birth
              </Label>
              <Input
                id="dob"
                type="date"
                required
                style={{ borderColor: 'var(--color-border)' }}
                className="mt-2"
              />
            </div>

            {/* Place of Birth */}
            <div>
              <Label htmlFor="pob" style={{ color: 'var(--color-text-primary)' }}>
                Place of Birth
              </Label>
              <Input
                id="pob"
                placeholder="City, Country"
                required
                style={{ borderColor: 'var(--color-border)' }}
                className="mt-2"
              />
            </div>

            {/* Birth Time */}
            <div>
              <Label htmlFor="birthTime" style={{ color: 'var(--color-text-primary)' }}>
                Birth Time
              </Label>
              <Input
                id="birthTime"
                type="time"
                required
                style={{ borderColor: 'var(--color-border)' }}
                className="mt-2"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <Button
                type="submit"
                className="w-full bg-[var(--color-button-primary)] text-[var(--color-button-text)] hover:bg-[var(--color-button-secondary)]"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Right Section: Image or Background */}
          <div className="hidden md:block relative">
            <img
              src={img}
              height="714"
              width="345"
              
              
              className="absolute inset-0 h-full w-full"
            

            ></img>
            
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="text-center text-sm text-[var(--color-text-secondary)]">
          By signing up, you agree to our{" "}
          <a href="#" className="underline text-[var(--color-link)]">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline text-[var(--color-link)]">
            Privacy Policy
          </a>.
        </div>
      </CardFooter>
    </Card>
  )
}

export default SignUpForm
