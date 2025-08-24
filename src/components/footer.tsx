import { Instagram, Linkedin, Github, Codepen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.instagram.com/girish_lade_/",
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/girish-lade-075bba201/",
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/girishlade111",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
  },
  {
    href: "https://codepen.io/Girish-Lade-the-looper",
    icon: <Codepen className="h-5 w-5" />,
    label: "Codepen",
  },
  {
    href: "mailto:girishlade111@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container mx-auto py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          © {new Date().getFullYear()} SynergyFlow. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="icon"
              asChild
              aria-label={link.label}
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
