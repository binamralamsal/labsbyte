import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  TwitterIcon,
} from "lucide-react";

import { Link } from "@tanstack/react-router";

import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";

import { cn } from "@/lib/utils";
import { useScrollStatus } from "@/hooks/use-scroll-status";

export function SiteHeader() {
  const scrollStatus = useScrollStatus();

  const isScrolledUp =
    scrollStatus.scrollDirection === "up" &&
    Math.abs(scrollStatus.scrollPosition) > 400;

  return (
    <header className={cn("bg-red-400")}>
      <div className="border-background/40 container hidden justify-between border-b border-dashed py-8 md:flex">
        <ul className="flex gap-5">
          <li>
            <a
              href="mailto:info@labsbyte.org"
              className="group flex items-center gap-2"
              target="_blank"
            >
              <MailIcon className="text-primary bg-background border-primary group-hover:bg-primary group-hover:text-primary-foreground size-6 rounded-full border p-1.5 transition-all" />
              <span className="text-background group-hover:text-background/70 text-sm transition">
                info@labsbyte.org
              </span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Labsbyte+Nexus/@27.7179476,85.3493453,18z/data=!4m6!3m5!1s0x39eb19c01dae0e27:0x34ea9f448c32a4c0!8m2!3d27.7175272!4d85.3503596!16s%2Fg%2F11yrq5vr04?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
              className="group flex items-center gap-2"
            >
              <MapPinIcon className="text-primary bg-background border-primary group-hover:bg-primary group-hover:text-primary-foreground size-6 rounded-full border p-1.5 transition-all" />
              <span className="text-background group-hover:text-background/70 text-sm transition">
                Chabihil, Maijubahal 07, Kathmandu
              </span>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <span className="text-background text-sm">Follow us on:</span>
          <ul className="flex gap-2">
            <li>
              <a
                className="text-primary bg-background border-primary hover:bg-primary hover:text-primary-foreground block rounded-full border transition-all"
                href="https://www.facebook.com/labsbytenexus/"
              >
                <FacebookIcon className="size-6 p-1.5" />
              </a>
            </li>
            <li>
              <a
                className="text-primary bg-background border-primary hover:bg-primary hover:text-primary-foreground block rounded-full border transition-all"
                href="https://www.instagram.com/labsbytenexus/"
              >
                <InstagramIcon className="size-6 p-1.5" />
              </a>
            </li>
            <li>
              <a className="text-primary bg-background border-primary hover:bg-primary hover:text-primary-foreground block rounded-full border transition-all">
                <TwitterIcon className="size-6 p-1.5" />
              </a>
            </li>
            <li>
              <a className="text-primary bg-background border-primary hover:bg-primary hover:text-primary-foreground block rounded-full border transition-all">
                <LinkedinIcon className="size-6 p-1.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={cn(
          isScrolledUp &&
            "animate-headerSticky bg-background supports-backdrop-filter:bg-background/90 fixed top-0 right-0 left-0 z-50 shadow-[0_8px_30px_rgb(0,0,0,0.05)] backdrop-blur",
        )}
      >
        <div
          className={cn(
            "container flex items-center justify-between py-4",
            isScrolledUp && "py-2",
          )}
        >
          <Link
            to="/"
            className={cn(
              "text-background inline-block px-2 py-4 transition-all",
              isScrolledUp && "text-primary",
            )}
          >
            LabsByte
          </Link>

          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
