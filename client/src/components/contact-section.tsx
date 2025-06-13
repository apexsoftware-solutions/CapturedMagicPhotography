import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import contactBgImage from "@assets/image_1749565660062.png";

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      sessionType: "",
      eventDate: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your inquiry!",
        description: "I'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending inquiry",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  return (
    <section 
      id="contact" 
      className="py-32 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${contactBgImage})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="mb-16">
          <h2 className="font-sans text-sm uppercase tracking-[0.2em] mb-4 text-white/90">
            @capturedmagicfxbg
          </h2>
          <a 
            href="https://www.instagram.com/capturedmagicfxbg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-white hover:bg-white hover:text-black text-white px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300 mb-8"
          >
            FOLLOW ME ON INSTAGRAM
          </a>
        </div>

        {/* Contact Form */}
        <div className="backdrop-blur-sm p-8 rounded-lg bg-[#ffffff40]">
          <h3 className="font-serif text-2xl mb-8">Get in Touch</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-sm text-foreground">
                        First Name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gray-200 focus:border-foreground bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-sm text-foreground">
                        Last Name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="border-gray-200 focus:border-foreground bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans text-sm text-foreground">
                      Email Address *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="email" className="border-gray-200 focus:border-foreground bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans text-sm text-foreground">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="tel" className="border-gray-200 focus:border-foreground bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sessionType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans text-sm text-foreground">
                      Session Type *
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-gray-200 focus:border-foreground bg-white">
                          <SelectValue placeholder="Select a session type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="family">Family Session</SelectItem>
                        <SelectItem value="maternity">Maternity & Newborn</SelectItem>
                        <SelectItem value="couples">Couples Session</SelectItem>
                        <SelectItem value="portrait">Portrait Session</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans text-sm text-foreground">
                      Preferred Date
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="date" className="border-gray-200 focus:border-foreground bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans text-sm text-foreground">
                      Tell me about your vision *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={5}
                        placeholder="Share details about your event, vision, and what makes this session special to you..."
                        className="border-gray-200 focus:border-foreground bg-white resize-vertical"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-foreground hover:bg-foreground/90 text-white py-3 font-sans text-sm uppercase tracking-[0.1em] transition-all duration-300"
              >
                {contactMutation.isPending ? "SENDING..." : "SEND INQUIRY"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
