import { FadeIn } from '@/components/ui/fade-in';
import { useState } from 'react';
import chessImg from '@assets/chess_board_1785210000000.jpg';
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
  location: z.string().min(2, 'Property address is required'),
  growingArea: z.string().min(1, 'Please select a growing area'),
  pcsModule: z.string().min(1, 'Please select a PCS module'),
  livestockInterest: z.string().min(1, 'Please answer'),
  livestockSpecies: z.string().optional(),
  defenseInterest: z.string().min(1, 'Please answer'),
  goals: z.string().min(10, 'Please provide a brief description of your goals'),
});

const pcsModules = [
  { value: 'pcs-grid-5',  label: 'PCS GRID-5',  description: 'One adult' },
  { value: 'pcs-grid-10', label: 'PCS GRID-10', description: 'Two adults' },
  { value: 'pcs-grid-15', label: 'PCS GRID-15', description: 'Two adults, one child' },
  { value: 'pcs-grid-20', label: 'PCS GRID-20', description: 'Two adults, two children' },
];

const livestockOptions = [
  { value: 'cracker-chickens', label: 'Cracker Chickens' },
  { value: 'kunekune-pigs',    label: 'Kunekune Pigs' },
  { value: 'cracker-sheep',    label: 'Cracker Sheep' },
  { value: 'cracker-rabbits',  label: 'Cracker Rabbits' },
];

export default function Contact() {
  const [showLivestockSpecies, setShowLivestockSpecies] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      location: '',
      growingArea: '',
      pcsModule: '',
      livestockInterest: '',
      livestockSpecies: '',
      defenseInterest: '',
      goals: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert('Application submitted. We will review and contact you shortly.');
  }

  const inputClass =
    'rounded-none border-0 border-b border-[#D9CABA] bg-transparent focus-visible:ring-0 focus-visible:border-[#2B2B28] px-0 shadow-none text-base';
  const triggerClass =
    'rounded-none border-0 border-b border-[#D9CABA] bg-transparent focus:ring-0 px-0 shadow-none text-base';
  const labelClass = 'font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28]';

  return (
    <div className="pt-24 pb-32">
      <section className="relative px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA] overflow-hidden">
        {/* Background chess image */}
        <div className="absolute inset-0">
          <img
            src={chessImg}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.18 }}
          />
        </div>
        <FadeIn>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
              Begin Your Journey
            </h1>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] max-w-2xl leading-relaxed">
              Upon acceptance, a food freedom professional will guide you every step of the way.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[800px] mx-auto">
        <FadeIn>
          {/* Availability notice */}
          <p className="font-sans text-sm italic text-[#B59A72] uppercase tracking-[0.06em] mb-10">
            Currently available in Central Florida only
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

              {/* Full Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className={inputClass} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Property Address */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Property Address (City, State)</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Homestead Rd, Orlando, FL" {...field} className={inputClass} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Growing Area */}
              <FormField
                control={form.control}
                name="growingArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Growing Area</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={triggerClass}>
                          <SelectValue placeholder="Select acreage" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-none border-[#D9CABA] bg-[#F5F2EC]">
                        <SelectItem value="quarter-acre"  className="focus:bg-[#E8E4D9]">1/4 Acre</SelectItem>
                        <SelectItem value="half-acre"     className="focus:bg-[#E8E4D9]">1/2 Acre</SelectItem>
                        <SelectItem value="three-quarter" className="focus:bg-[#E8E4D9]">3/4 Acre</SelectItem>
                        <SelectItem value="full-acre"     className="focus:bg-[#E8E4D9]">Full Acre</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Desired PCS Module */}
              <FormField
                control={form.control}
                name="pcsModule"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Desired PCS Module</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={triggerClass}>
                          <SelectValue placeholder="Select a module" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-none border-[#D9CABA] bg-[#F5F2EC]">
                        {pcsModules.map(mod => (
                          <SelectItem key={mod.value} value={mod.value} className="focus:bg-[#E8E4D9]">
                            <div>
                              <span className="font-mono font-bold text-[#2B2B28]">{mod.label}</span>
                              <span className="ml-2 text-xs text-[#B59A72]">— {mod.description}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Livestock Interest */}
              <FormField
                control={form.control}
                name="livestockInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Are you interested in livestock?</FormLabel>
                    <Select
                      onValueChange={(val) => {
                        field.onChange(val);
                        setShowLivestockSpecies(val === 'yes');
                        if (val === 'no') form.setValue('livestockSpecies', '');
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className={triggerClass}>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-none border-[#D9CABA] bg-[#F5F2EC]">
                        <SelectItem value="yes" className="focus:bg-[#E8E4D9]">Yes</SelectItem>
                        <SelectItem value="no"  className="focus:bg-[#E8E4D9]">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Livestock Species — conditional */}
              {showLivestockSpecies && (
                <FormField
                  control={form.control}
                  name="livestockSpecies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClass}>Which livestock are you interested in?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className={triggerClass}>
                            <SelectValue placeholder="Select species" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-none border-[#D9CABA] bg-[#F5F2EC]">
                          {livestockOptions.map(opt => (
                            <SelectItem key={opt.value} value={opt.value} className="focus:bg-[#E8E4D9]">
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* Defense Training Interest */}
              <FormField
                control={form.control}
                name="defenseInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Are you interested in defense training?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={triggerClass}>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-none border-[#D9CABA] bg-[#F5F2EC]">
                        <SelectItem value="yes" className="focus:bg-[#E8E4D9]">Yes</SelectItem>
                        <SelectItem value="no"  className="focus:bg-[#E8E4D9]">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Goals */}
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Brief Description of Goals</FormLabel>
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
      </section>
    </div>
  );
}
