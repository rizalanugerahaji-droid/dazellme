"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="shadow-xl border-pink-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-pink-600">
            Welcome to Dazzle Me ✨
          </CardTitle>
          <CardDescription className="text-gray-500">
            Login to your Dazzle Me account and start shopping your style!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="focus:border-pink-500 focus:ring-pink-500"
                />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-pink-500 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="focus:border-pink-500 focus:ring-pink-500"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-pink-400 text-pink-600 hover:bg-pink-50"
                >
                  Continue with Google
                </Button>
              </div>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              Don’t have a Dazzle Me account?{" "}
              <a
                href="#"
                className="text-pink-600 underline underline-offset-4 hover:text-pink-700"
              >
                Sign up here
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
