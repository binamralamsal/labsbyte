import { LinkProps } from "@tanstack/react-router";

export const navLinks: { href: LinkProps["to"]; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
