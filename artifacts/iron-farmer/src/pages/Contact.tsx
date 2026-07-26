import { FadeIn } from '@/components/ui/fade-in';
import { Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  location: z.string().min(2, 'Property location is required'),
  acreage: z.string().min(1, 'Acreage is required'),
  interest: z.string().min(1, 'Please select a primary interest'),
  source: z.string().optional(),
  goals: z.string().min(10, 'Please provide a brief description of your goals'),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      location: '',
      acreage: '',
      interest: '',
      source: '',
      goals: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Submit logic would go here
    alert("Application submitted. We will review and contact you shortly.");
  }

  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA]">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            Begin Your Assessment
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] max-w-2xl leading-relaxed">
            We accept a limited number of estate projects per year to ensure uncompromising quality. Please provide details about your property below.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7">
            <FadeIn>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28]">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="rounded-none border-0 border-b border-[#D9CABA] bg-transparent focus-visible:ring-0 focus-visible:border-[#2B2B28] px-0 shadow-none text-base" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28]">Property Location (City, State)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Bozeman, MT" 
                              {...field} 
                              className="rounded-none border-0 border-b border-[#D9CABA] bg-transparent focus-visible:ring-0 focus-visible:border-[#2B2B28] px-0 shadow-none text-base" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="acreage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28]">Acreage</FormLabel>
                          <FormControl>
                            <Input 
                              type="number"
                              placeholder="40" 
                              {...field} 
                              className="rounded-none border-0 border-b border-[#D9CABA] bg-transparent focus-visible:ring-0 focus-visible:border-[#2B2B28] px-0 shadow-none text-base" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28]">Primary Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none border-0 border-b border-[#D9CABA] bg-transparent focus:ring-0 px-0 shadow-none text-base">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none border-[#D9CABA] bg-[#F5F2EC]">
                            <SelectItem value="food-production" className="focus:bg-[#E8E4D9]">Food Production</SelectItem>
                            <SelectItem value="site-preparation" className="focus:bg-[#E8E4D9]">Site Preparation</SelectItem>
                            <SelectItem value="full-estate" className="focus:bg-[#E8E4D9]">Full Estate System</SelectItem>
                            <SelectItem value="risk-assessment" className="focus:bg-[#E8E4D9]">Risk Assessment</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28]">Brief Description of Goals</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Current state of land and what you wish to achieve..." 
                            className="rounded-none border border-[#D9CABA] bg-transparent focus-visible:ring-0 focus-visible:border-[#2B2B28] shadow-none text-base min-h-[120px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto bg-[#2B2B28] text-[#F5F2EC] hover:bg-[#4A5240] rounded-none px-12 py-6 font-mono text-xs uppercase tracking-[0.15em] transition-colors"
                  >
                    Submit Application
                  </Button>
                </form>
              </Form>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <FadeIn delay={0.2}>
              <div className="bg-[#E8E4D9] p-8 border border-[#D9CABA]">
                <h3 className="font-serif text-2xl text-[#2B2B28] mb-4">Direct Scheduling</h3>
                <p className="font-sans text-sm text-[#4A5240] mb-8 leading-relaxed">
                  Bypass the application queue and schedule an initial discovery call with our architectural lead.
                </p>
                <button type="button" className="w-full border border-[#2B2B28] text-[#2B2B28] hover:bg-[#2B2B28] hover:text-[#F5F2EC] px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] transition-colors">
                  Schedule a Discovery Call
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-[#2B2B28] p-8 text-[#F5F2EC]">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-[#B59A72]" />
                  <h3 className="font-serif text-2xl">Secure Consultation</h3>
                </div>
                <p className="font-sans text-sm text-[#D9CABA] mb-8 leading-relaxed">
                  For high-profile clients requiring absolute discretion. Discuss your estate's risk assessment and defensive preparations over an encrypted channel.
                </p>
                <button type="button" className="w-full bg-[#F5F2EC] text-[#2B2B28] hover:bg-[#B59A72] hover:text-[#2B2B28] px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] transition-colors">
                  Request an Encrypted Consultation
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
