"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Calendar, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const quickScheduleSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\(\)]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  serviceType: z.string().min(1, "Please select a service"),
  urgency: z.string().min(1, "Please select urgency level"),
});

type QuickScheduleValues = z.infer<typeof quickScheduleSchema>;

interface QuickScheduleFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function QuickScheduleForm({
  className,
  onSuccess,
}: QuickScheduleFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuickScheduleValues>({
    resolver: zodResolver(quickScheduleSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      urgency: "",
    },
  });

  async function onSubmit(data: QuickScheduleValues) {
    setIsSubmitting(true);
    try {
      // TODO: Implement actual form submission to API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Quick schedule data:", data);

      toast.success("Request Received!", {
        description: "We'll contact you shortly to confirm your appointment.",
      });

      form.reset();
      onSuccess?.();
    } catch {
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full", className)}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(405) 555-0123"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Service Type */}
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Needed *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="drain-cleaning">
                      Drain Cleaning
                    </SelectItem>
                    <SelectItem value="leak-repair">Leak Repair</SelectItem>
                    <SelectItem value="water-heater">
                      Water Heater Service
                    </SelectItem>
                    <SelectItem value="toilet-repair">
                      Toilet Repair
                    </SelectItem>
                    <SelectItem value="pipe-repair">
                      Pipe Repair/Replacement
                    </SelectItem>
                    <SelectItem value="sewer-line">Sewer Line Service</SelectItem>
                    <SelectItem value="urgent">Urgent Repair Needed</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Urgency */}
          <FormField
            control={form.control}
            name="urgency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Urgency Level *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="How urgent is this?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="urgent">
                      Urgent - As soon as possible
                    </SelectItem>
                    <SelectItem value="today">
                      Today if available
                    </SelectItem>
                    <SelectItem value="soon">
                      Soon - Within a few days
                    </SelectItem>
                    <SelectItem value="flexible">
                      Flexible - Anytime this week
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-brand-primary hover:bg-brand-primary/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Service
              </>
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
