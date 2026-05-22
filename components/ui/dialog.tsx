"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog(
  props: React.ComponentProps<typeof DialogPrimitive.Root>
) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  return (
    <DialogPrimitive.Trigger
      data-slot="dialog-trigger"
      {...props}
    />
  )
}

function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) {
  return (
    <DialogPrimitive.Portal
      data-slot="dialog-portal"
      {...props}
    />
  )
}

function DialogClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-close"
      {...props}
    />
  )
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        `
        fixed inset-0 z-50
        bg-black/70
        backdrop-blur-md

        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0

        duration-300
        `,
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          `
          fixed left-1/2 top-1/2 z-50
          w-full
          max-w-[calc(100%-1.5rem)]
          sm:max-w-xl

          -translate-x-1/2
          -translate-y-1/2

          overflow-hidden

          rounded-3xl

          border border-white/10

          bg-[rgba(15,15,20,0.82)]

          p-6 sm:p-8

          shadow-2xl
          shadow-black/40

          backdrop-blur-2xl

          duration-300

          data-[state=open]:animate-in
          data-[state=closed]:animate-out

          data-[state=closed]:fade-out-0
          data-[state=open]:fade-in-0

          data-[state=closed]:zoom-out-95
          data-[state=open]:zoom-in-95

          data-[state=closed]:slide-out-to-bottom-4
          data-[state=open]:slide-in-from-bottom-4
          `,
          className
        )}
        {...props}
      >
        {/* Glow Accent */}
        <div
          className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-br
          from-primary/10
          via-transparent
          to-accent/10
          "
        />

        <div className="relative z-10">
          {children}
        </div>

        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="
            absolute right-4 top-4

            inline-flex
            h-9 w-9
            items-center
            justify-center

            rounded-full

            border border-white/10

            bg-white/5

            text-muted-foreground

            transition-all duration-200

            hover:bg-white/10
            hover:text-white
            hover:scale-105

            focus:outline-none
            focus:ring-2
            focus:ring-primary/40

            disabled:pointer-events-none
            "
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col gap-3 text-center sm:text-left",
        className
      )}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        `
        flex flex-col-reverse gap-3
        sm:flex-row sm:justify-end
        `,
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        `
        text-2xl
        font-semibold
        tracking-tight
        text-foreground
        `,
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        `
        text-sm
        leading-relaxed
        text-muted-foreground
        `,
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
