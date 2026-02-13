"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: string;
  category: string;
  className?: string;
  delay?: number;
}

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  return hydrated;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  className,
  delay = 0,
}: BlogCardProps) {
  const hydrated = useHydrated();
  return (
    <motion.div
      initial={hydrated ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={`/blog/${slug}`} className="block h-full">
        <Card
          className={cn(
            "h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer",
            "border-2 hover:border-brand-primary",
            className
          )}
        >
          {/* Featured Image Placeholder */}
          <div className="relative h-48 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 overflow-hidden">
            <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors" />
            <div className="absolute top-4 left-4">
              <Badge className="bg-brand-primary text-white">
                {category}
              </Badge>
            </div>
          </div>

          <CardHeader>
            <CardTitle className="text-xl font-heading group-hover:text-brand-primary transition-colors line-clamp-2">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-3 text-base">
              {excerpt}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow">
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-brand-text-secondary">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <User className="w-4 h-4 text-brand-primary" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-brand-text-primary">{author.name}</p>
                <p className="text-brand-text-secondary text-xs">{author.role}</p>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <span className="inline-flex items-center gap-2 text-brand-primary font-semibold group-hover:gap-3 transition-all">
              Read Article
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
