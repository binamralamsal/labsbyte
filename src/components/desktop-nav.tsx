import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { navLinks } from "@/config/site";
import { useScrollStatus } from "@/hooks/use-scroll-status";

export function DesktopNav() {
  const scrollStatus = useScrollStatus();

  const isScrolledUp =
    scrollStatus.scrollDirection === "up" &&
    Math.abs(scrollStatus.scrollPosition) > 400;

  return (
    <ul className="hidden gap-2 md:flex">
      {navLinks.map((navLink) => (
        <li>
          <Link
            to={navLink.href}
            className={cn(
              "text-background hover:text-primary inline-block p-4 transition-all",
              isScrolledUp && "text-foreground hover:text-primary",
            )}
            activeProps={{ className: "text-primary" }}
          >
            {navLink.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  {
    /* <Button
            size="lg"
            variant={isScrolledUp ? "outline" : "outlineInversed"}
            hoverAnimation
            className="hidden md:block"
          >
            Get Free Access <ArrowRightIcon />
          </Button> */
  }
}
