import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap",
    "rounded-xl",
    "font-medium",
    "transition-all duration-300",
    "outline-none",
    "select-none",
    "cursor-pointer",

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    "focus-visible:ring-2",
    "focus-visible:ring-primary/50",

    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-primary",
          "text-primary-foreground",

          "shadow-lg shadow-primary/20",

          "hover:bg-primary/90",
          "hover:shadow-xl hover:shadow-primary/30",

          "hover:-translate-y-0.5",
          "active:translate-y-0",
        ].join(" "),

        destructive: [
          "bg-destructive",
          "text-white",

          "hover:bg-destructive/90",

          "shadow-lg shadow-destructive/20",
        ].join(" "),

        outline: [
          "border border-white/10",

          "bg-white/5",
          "backdrop-blur-xl",

          "text-foreground",

          "hover:bg-white/10",
          "hover:border-primary/40",

          "hover:shadow-lg hover:shadow-primary/10",

          "hover:-translate-y-0.5",
        ].join(" "),

        secondary: [
          "bg-secondary",
          "text-secondary-foreground",

          "hover:bg-secondary/80",
        ].join(" "),

        ghost: [
          "text-foreground",

          "hover:bg-white/5",
          "hover:text-primary",
        ].join(" "),

        link: [
          "text-primary",
          "underline-offset-4",

          "hover:underline",
        ].join(" "),
      },

      size: {
        default: "h-11 px-5 text-sm",

        sm: "h-9 px-4 text-sm",

        lg: "h-14 px-8 text-base font-semibold",

        icon: "size-11",

        "icon-sm": "size-9",

        "icon-lg": "size-14",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }