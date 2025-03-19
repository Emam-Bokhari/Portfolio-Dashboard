import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="sm:w-96 shadow-xl dark:bg-[#140C1C] ">
        <CardHeader>
          <CardTitle className="text-center text-xl text-[#110E18] dark:text-[#FFFFFF]">
            Admin Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
              <Input
                type="text"
                placeholder="Email"
                className="pl-10 text-[#FFFFFF] "
              />
            </div>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
              <Input
                type="password"
                placeholder="Password"
                className="pl-10 text-[#FFFFFF]"
              />
            </div>
            <Button className="w-full bg-[#8750F7] hover:bg-[#733DD6] text-[white] cursor-pointer">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
