"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  avatar?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  avatar,
  className,
}: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card
      className={cn(
        "h-full flex flex-col",
        "border-2 hover:border-brand-primary/50 transition-colors",
        className
      )}
    >
      <CardHeader className="space-y-4">
        <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-5 h-5",
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <blockquote className="text-lg text-brand-text-primary leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-brand-primary/10 text-brand-primary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-brand-text-primary">{author}</p>
            {role && (
              <p className="text-sm text-brand-text-secondary">{role}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
