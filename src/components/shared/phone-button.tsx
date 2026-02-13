"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  phoneNumber?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  showText?: boolean;
  text?: string;
  className?: string;
  iconClassName?: string;
}

export function PhoneButton({
  phoneNumber = "(405) 555-0123",
  variant = "default",
  size = "default",
  showText = true,
  text = "Call Now",
  className,
  iconClassName,
}: PhoneButtonProps) {
  const formatPhoneForHref = (phone: string) => {
    return phone.replace(/\D/g, "");
  };

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn("group", className)}
    >
      <a
        href={`tel:+1${formatPhoneForHref(phoneNumber)}`}
        aria-label={`Call ${phoneNumber}`}
      >
        <Phone
          className={cn(
            "transition-transform group-hover:rotate-12",
            iconClassName
          )}
          aria-hidden="true"
        />
        {showText && <span>{text}</span>}
      </a>
    </Button>
  );
}
