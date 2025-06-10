import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
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
    <section id="contact" className="py-20 lg:py-32 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl lg:text-6xl text-primary mb-6">
            Let's Create Magic Together
          </h2>
          <p className="font-serif text-xl text-foreground max-w-3xl mx-auto">
            Ready to capture your special moments? I'd love to hear about your vision and create something beautiful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-script text-3xl text-primary mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:hello@capturedmagicphotography.com"
                      className="font-sans text-primary hover:text-primary/80 transition-colors duration-300"
                    >
                      hello@capturedmagicphotography.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="font-sans text-primary hover:text-primary/80 transition-colors duration-300"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-foreground">Location</p>
                    <p className="font-sans text-primary">Serving the Midwest & Beyond</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-script text-2xl text-primary mb-4">Follow Along</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary hover:bg-primary/80 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary hover:bg-primary/80 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="font-script text-3xl text-primary mb-6">Book Your Session</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-serif font-semibold text-foreground">
                          First Name *
                        </FormLabel>
                        <FormControl>
                          <Input {...field} className="border-secondary focus:border-primary" />
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
                        <FormLabel className="font-serif font-semibold text-foreground">
                          Last Name *
                        </FormLabel>
                        <FormControl>
                          <Input {...field} className="border-secondary focus:border-primary" />
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
                      <FormLabel className="font-serif font-semibold text-foreground">
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} type="email" className="border-secondary focus:border-primary" />
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
                      <FormLabel className="font-serif font-semibold text-foreground">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input {...field} type="tel" className="border-secondary focus:border-primary" />
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
                      <FormLabel className="font-serif font-semibold text-foreground">
                        Session Type *
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-secondary focus:border-primary">
                            <SelectValue placeholder="Select a session type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding Photography</SelectItem>
                          <SelectItem value="family">Family Session</SelectItem>
                          <SelectItem value="maternity">Maternity & Newborn</SelectItem>
                          <SelectItem value="engagement">Engagement Session</SelectItem>
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
                      <FormLabel className="font-serif font-semibold text-foreground">
                        Preferred Date
                      </FormLabel>
                      <FormControl>
                        <Input {...field} type="date" className="border-secondary focus:border-primary" />
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
                      <FormLabel className="font-serif font-semibold text-foreground">
                        Tell me about your vision *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          placeholder="Share details about your event, vision, and what makes this session special to you..."
                          className="border-secondary focus:border-primary resize-vertical"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary hover:bg-primary/80 text-white py-4 rounded-lg font-serif text-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
