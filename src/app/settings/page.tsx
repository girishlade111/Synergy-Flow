"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const fonts = [
  { name: "Inter", value: "font-body" },
  { name: "Roboto", value: "font-roboto" },
  { name: "Lato", value: "font-lato" },
  { name: "Open Sans", value: "font-open-sans" },
  { name: "Montserrat", value: "font-montserrat" },
];

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [font, setFont] = useState("font-body");

  useEffect(() => {
    setMounted(true);
    const savedFont = localStorage.getItem("synergyflow-font") || "font-body";
    setFont(savedFont);
    document.body.classList.remove(...fonts.map(f => f.value));
    document.body.classList.add(savedFont);
  }, []);

  const handleThemeChange = (isDark: boolean) => {
    setTheme(isDark ? "dark" : "light");
  };

  const handleFontChange = (newFont: string) => {
    document.body.classList.remove(font);
    document.body.classList.add(newFont);
    setFont(newFont);
    localStorage.setItem("synergyflow-font", newFont);
  };
  
  if (!mounted) return null;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Manage your account and application settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Appearance</h3>
             <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label htmlFor="dark-mode" className="font-medium">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable or disable dark mode.</p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={theme === 'dark'}
                  onCheckedChange={handleThemeChange}
                />
              </div>
               <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label htmlFor="font-select" className="font-medium">Font Style</Label>
                  <p className="text-sm text-muted-foreground">Choose the application font.</p>
                </div>
                 <Select value={font} onValueChange={handleFontChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select font" />
                  </SelectTrigger>
                  <SelectContent>
                    {fonts.map((f) => (
                      <SelectItem key={f.value} value={f.value}>{f.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Profile</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="jane.doe@example.com"
                />
              </div>
            </div>
            <Button>Update Profile</Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label htmlFor="email-notifications" className="font-medium">
                    Email Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates and mentions via email.
                  </p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label htmlFor="push-notifications" className="font-medium">
                    Push Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Get real-time alerts on your devices.
                  </p>
                </div>
                <Switch id="push-notifications" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
