'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Code2, 
  PenTool, 
  TrendingUp, 
  Zap, 
  Target, 
  Globe, 
  CheckCircle,
  Star,
  Users,
  DollarSign,
  Clock,
  Shield,
  Rocket,
  BarChart3,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { useLanguage } from '../../contexts/LanguageContext';

const services = [
  {
    icon: <Code2 className="h-12 w-12 text-blue-600" />,
    title: "Full-Stack Web Development",
    subtitle: "Build. Scale. Dominate.",
    description: "Custom web applications that don't just look good—they convert visitors into customers and scale with your growth.",
    features: [
      "React/Next.js Applications",
      "E-commerce Platforms", 
      "Database Design & APIs",
      "Mobile-Responsive Design",
      "Performance Optimization",
      "SEO Implementation"
    ],
    deliverables: [
      "Lightning-fast loading speeds (90+ Lighthouse scores)",
      "Mobile-first responsive design",
      "SEO-optimized for organic growth",
      "Scalable architecture for future expansion"
    ],
    investment: "Starting at $2,997",
    timeline: "2-6 weeks",
    results: "40% faster sites that convert 3x better than industry average"
  },
  {
    icon: <PenTool className="h-12 w-12 text-purple-600" />,
    title: "Conversion Copywriting",
    subtitle: "Words That Sell.",
    description: "Psychology-driven copy that transforms your website visitors into paying customers through proven persuasion frameworks.",
    features: [
      "Landing Page Copy",
      "Sales Page Creation",
      "Email Sequences", 
      "Ad Copy & Creative",
      "Website Copy Optimization",
      "A/B Testing Copy"
    ],
    deliverables: [
      "High-converting sales pages (8-15% conversion rates)",
      "Email sequences that nurture and sell",
      "Ad copy that stops the scroll",
      "Website copy that builds trust and drives action"
    ],
    investment: "Starting at $1,497",
    timeline: "1-3 weeks",
    results: "12.5% average conversion rates (3x industry standard)"
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-green-600" />,
    title: "Digital Marketing Strategy",
    subtitle: "Traffic That Converts.",
    description: "Complete marketing funnels that attract your ideal customers and guide them to purchase through strategic campaigns.",
    features: [
      "Marketing Funnel Strategy",
      "Social Media Campaigns",
      "PPC Ad Management",
      "Content Marketing",
      "Analytics & Optimization",
      "Conversion Rate Optimization"
    ],
    deliverables: [
      "Complete marketing funnel setup",
      "Targeted ad campaigns across platforms",
      "Content calendar and strategy",
      "Monthly performance reports and optimization"
    ],
    investment: "Starting at $2,497/month",
    timeline: "Ongoing",
    results: "300% ROI within 90 days for most clients"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your business, target audience, and goals to create a custom roadmap for success.",
    duration: "1 week"
  },
  {
    step: "02", 
    title: "Design & Development",
    description: "Build your solution using proven frameworks and conversion-focused design principles.",
    duration: "2-4 weeks"
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description: "Deploy your project with comprehensive testing, then continuously optimize for maximum results.",
    duration: "1 week + ongoing"
  }
];

const testimonials = [
  {
    name: "Jackie Souto",
    role: "BJJ World Champion & Coach",
    company: "Jackie Souto Academy",
    quote: "Ismael transformed my personal brand into a profitable business. His combination of technical skills and marketing expertise generated over $50K in course sales within the first 3 months.",
    results: "$50K+ revenue increase",
    image: "/images/bjjstory-usa.png"
  },
  {
    name: "BJJ Championship",
    role: "Event Organizer",
    company: "World BJJ Championships",
    quote: "The landing page and VSL that Ismael created achieved a 12.5% conversion rate - triple what we were getting before. The event sold out faster than ever.",
    results: "12.5% conversion rate",
    image: "/images/bjjchamp-nz.png"
  }
];

const guarantees = [
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "100% Satisfaction Guarantee",
    description: "If you're not completely satisfied with the results, I'll work for free until you are—or refund your investment."
  },
  {
    icon: <Clock className="h-8 w-8 text-green-600" />,
    title: "On-Time Delivery",
    description: "Your project will be delivered on schedule, or you get 20% off your investment. No excuses, no delays."
  },
  {
    icon: <Rocket className="h-8 w-8 text-purple-600" />,
    title: "Performance Promise",
    description: "Your website will achieve 90+ Lighthouse performance scores and load in under 3 seconds, guaranteed."
  }
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full mb-8">
              <Star className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-blue-600">{t('servicesPage.badge')}</span>
              <Star className="h-5 w-5 text-blue-600" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {t('servicesPage.title')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('servicesPage.description')}
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                🚨 Is Your Business Suffering From These Profit Killers?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Website that looks amateur and drives people away</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Landing pages with terrible conversion rates</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Marketing that wastes money with no results</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Slow, buggy websites that frustrate customers</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Copy that bores instead of sells</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>No clear strategy to grow your business</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-xl">
                  <Zap className="mr-2 h-5 w-5" />
                  Stop The Bleeding - Get Started Today
                </Button>
              </Link>
              <p className="text-sm text-slate-500">
                ⚡ Free consultation • No obligations • Results guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Services That Actually <span className="text-blue-600">Make You Money</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each service is designed with one goal: <strong>Maximize your ROI</strong>. 
              No fluff, no filler—just proven strategies that put money in your pocket.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-lg font-semibold text-blue-600 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {/* Features */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4">What You Get:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-4">🎯 Results You'll See:</h4>
                    <div className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-blue-800 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-slate-500">Investment</p>
                        <p className="text-2xl font-bold text-slate-900">{service.investment}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500">Timeline</p>
                        <p className="font-semibold text-slate-700">{service.timeline}</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                      <p className="text-sm font-semibold text-green-800">
                        🏆 Proven Results: {service.results}
                      </p>
                    </div>

                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3">
                        Get Started Today
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My Proven 3-Step Process
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From strategy to launch, every step is designed to maximize your results and minimize your stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-white/30 -z-10"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg opacity-90 mb-4">{step.description}</p>
                <span className="text-sm bg-white/20 px-4 py-2 rounded-full">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Real Results from Real Clients
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what happens when you work with someone who understands both technology and psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-xl border-0 p-8">
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-slate-600">{testimonial.role}</p>
                      <p className="text-sm text-slate-500">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-slate-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-bold text-green-800">
                      📊 Result: {testimonial.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My Iron-Clad Guarantees
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              I'm so confident in my ability to deliver results that I put my money where my mouth is.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-white/10 rounded-2xl w-fit">
                    {guarantee.icon}
                  </div>
                  <CardTitle className="text-xl font-bold mb-4">
                    {guarantee.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center opacity-90 leading-relaxed">
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Stop Losing Money?
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Every day you wait is another day your competitors are capturing the customers you should be getting. 
              <strong className="block mt-2">Let's change that today.</strong>
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold mb-6">🎁 Limited Time Bonus</h3>
              <div className="grid md:grid-cols-3 gap-6 text-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Free 30-day support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Performance optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Marketing consultation</span>
                </div>
              </div>
              <p className="text-sm mt-4 opacity-75">
                Worth $2,500 - Yours free when you start this month
              </p>
            </div>

            <div className="space-y-6">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-2xl font-bold rounded-full shadow-2xl">
                  <MessageSquare className="mr-3 h-7 w-7" />
                  {t('servicesPage.cta.button')}
                </Button>
              </Link>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm opacity-75">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>15-minute call</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>No sales pitch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Custom strategy</span>
                </div>
              </div>

              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                In just 15 minutes, I'll show you exactly how to turn your website into a profit-generating machine. 
                <strong>100% free, no strings attached.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}