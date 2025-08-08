import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactInquirySchema, type InsertContactInquiry } from '@shared/schema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: InsertContactInquiry) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue dark:text-white">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Ready to make a difference? Contact us to learn more about our programs, volunteer opportunities, or partnership possibilities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
                  <p className="text-gray-600 dark:text-gray-300">123 Empowerment Street, Accra, Ghana</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+233 XX XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">info@boame.org</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gray-50 dark:bg-dark-card p-8 rounded-2xl shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John" 
                            className="bg-white dark:bg-dark-bg border-gray-300 dark:border-gray-600"
                            {...field} 
                          />
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
                        <FormLabel className="text-gray-700 dark:text-gray-300">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Doe" 
                            className="bg-white dark:bg-dark-bg border-gray-300 dark:border-gray-600"
                            {...field} 
                          />
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
                      <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="john@example.com" 
                          className="bg-white dark:bg-dark-bg border-gray-300 dark:border-gray-600"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white dark:bg-dark-bg border-gray-300 dark:border-gray-600">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="donation">Donation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us how we can help..."
                          className="bg-white dark:bg-dark-bg border-gray-300 dark:border-gray-600 min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-3 text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
