import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-snap_yellow text-snap_blue text-base hover:text-snap_yellow hover:bg-snap_blue">
          Login / Sign up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-max rounded-3xl p-8">
        <Tabs defaultValue="account" className="w-[400px]">
          <div className="bg-form-bg flex items-end h-40 bg-cover bg-center bg-blend-color-burn pb-2 px-2 rounded-xl">
            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger value="account">Login</TabsTrigger>
              <TabsTrigger value="password">Sign Up</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login to your Snappers account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Mobile No (77XXXXXXXX)</Label>
                  <Input
                    id="username"
                    type="number"
                    placeholder="77XXXXXXXX"
                    className="remove-arrow"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-snap_blue hover:bg-slate-800">
                  Login to Snappers
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                  Sign up for Snappers to get a welcome surprise.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Mobile No (77XXXXXXXX)</Label>
                  <Input
                    id="username"
                    type="number"
                    placeholder="77XXXXXXXX"
                    className="remove-arrow"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-snap_blue hover:bg-slate-800">Next Step</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
