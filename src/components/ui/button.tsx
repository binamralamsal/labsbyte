import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-transparent bg-clip-padding text-xs font-medium whitespace-nowrap transition-all duration-500 outline-none select-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "text-primary border-primary hover:text-primary-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 hover:bg-primary aria-expanded:bg-muted aria-expanded:text-foreground",
        outlineInversed:
          "text-background border-background hover:border-primary hover:text-primary-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 hover:bg-primary aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-11 gap-1.5 px-8 text-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-7 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1 px-4 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "text-md h-13 gap-1.5 px-12 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-md",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  hoverAnimation = false,
  children,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & { hoverAnimation?: boolean }) {
  return (
    <button
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        hoverAnimation && "relative overflow-hidden",
        className,
      )}
      {...props}
    >
      {hoverAnimation ? (
        <>
          <span className="inline-flex items-center gap-1.5 transition-all duration-500 group-hover/button:translate-y-[-120%] group-hover/button:opacity-0 group-hover/button:blur-sm">
            {children}
          </span>
          <span className="absolute inset-0 inline-flex translate-y-[120%] items-center justify-center gap-1.5 transition-all duration-500 group-hover/button:translate-y-0">
            {children}
          </span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export { Button, buttonVariants };
