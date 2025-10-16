'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowRight, 
  CheckCircle, 
  Play, 
  Star, 
  TrendingUp, 
  Users, 
  Zap,
  Target,
  FileText,
  Video,
  Image as ImageIcon,
  Globe
} from 'lucide-react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  
  // Safely use language context with fallback
  let t = (key: string) => key; // Default fallback
  try {
    const context = useLanguage();
    t = context.t;
  } catch (error) {
    // Context not available, use fallback
    console.warn('LanguageContext not available, using fallback');
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  const technologies = [
    { name: 'React & Vite', icon: '⚛️', description: t('technologies.items.react') },
    { name: 'Tailwind CSS', icon: '🎨', description: t('technologies.items.tailwind') },
    { name: 'shadcn/ui', icon: '🚀', description: t('technologies.items.shadcn') },
    { name: 'Facebook Ads', icon: '📱', description: t('technologies.items.facebook') },
    { name: 'Google Ads', icon: '🔍', description: t('technologies.items.google') },
    { name: 'Hotmart Integration', icon: '💰', description: t('technologies.items.hotmart') },
    { name: 'Video Editing', icon: '🎬', description: t('technologies.items.video') },
    { name: 'Landing Pages', icon: '📄', description: t('technologies.items.landing') }
  ];

  const services = [
    {
      title: t('services.copywriting.title'),
      description: t('services.copywriting.description'),
      icon: <FileText className="h-8 w-8" />,
      features: ['Sales Pages', 'Email Campaigns', 'Ad Copy', 'Website Content']
    },
    {
      title: t('services.landingPages.title'),
      description: t('services.landingPages.description'),
      icon: <Target className="h-8 w-8" />,
      features: ['High-Converting Design', 'A/B Testing', 'Mobile Optimized', 'Analytics Integration']
    },
    {
      title: t('services.videoCreation.title'),
      description: t('services.videoCreation.description'),
      icon: <Video className="h-8 w-8" />,
      features: ['VSL Creation', 'Testimonials', 'Product Demos', 'Social Media Content']
    },
    {
      title: t('services.digitalMarketing.title'),
      description: t('services.digitalMarketing.description'),
      icon: <TrendingUp className="h-8 w-8" />,
      features: ['Facebook Ads', 'Google Ads', 'Email Marketing', 'Marketing Automation']
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      company: 'TechStart',
      text: 'Increased our conversion rate by 340% in just 2 months!',
      result: '+340% Conversion'
    },
    {
      name: 'Maria Santos',
      company: 'EduOnline',
      text: 'The landing page generated R$ 500k in the first launch.',
      result: 'R$ 500k Revenue'
    },
    {
      name: 'João Oliveira',
      company: 'FitnessPro',
      text: 'Best investment in marketing I ever made. ROI of 12x!',
      result: '12x ROI'
    }
  ];

  const clients = [
    { name: 'TechNova', logo: '🏢' },
    { name: 'Boostly', logo: '📈' },
    { name: 'MarketEdge', logo: '🎯' },
    { name: 'SalesSuite', logo: '💼' },
    { name: 'LaunchMax', logo: '🚀' },
    { name: 'GrowthForge', logo: '🧪' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" suppressHydrationWarning={true}>
      {/* Hero Section */}
      {/* Hero Section - Keep same purple gradient for both modes */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div suppressHydrationWarning={true}>
              <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold animate-pulse">
                {isClient ? t('hero.badge') : '🔥 Converting 3x Better Than Industry Average'}
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {isClient ? t('hero.title') : 'Turn Your Traffic Into'} 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> {isClient ? t('hero.titleHighlight') : 'Paying Customers'}</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 opacity-90 leading-relaxed text-gray-300">
                {isClient ? t('hero.description') : 'Complete digital marketing solutions that convert visitors into buyers. From copywriting that sells to websites that perform, I deliver results that grow your business.'} 
                <strong className="text-yellow-400"> {isClient ? t('hero.descriptionHighlight') : 'Results that actually matter.'}</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" suppressHydrationWarning={true}>
              <Button asChild size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300">
                <Link href="/contact">
                  {isClient ? t('hero.ctaPrimary') : 'Get Your Free Strategy Call'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 backdrop-blur-sm">
                <Link href="/portfolio">
                  <Play className="mr-2 h-5 w-5" />
                  {isClient ? t('hero.ctaSecondary') : 'Watch Success Stories'}
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-300 dark:text-gray-400" suppressHydrationWarning={true}>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span>500+ {isClient ? t('hero.socialProof.clients') : 'Happy Clients'}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span>R$5M+ {isClient ? t('hero.socialProof.revenue') : 'Generated Revenue'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span>3.4x {isClient ? t('hero.socialProof.roi') : 'Average ROI'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8 font-medium" suppressHydrationWarning={true}>
            {isClient ? t('clients.title') : 'Trusted by leading companies'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center gap-2 text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                <span className="text-3xl">{client.logo}</span>
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" suppressHydrationWarning={true}>
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              {isClient ? t('services.badge') : '🚀 Services'}
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {isClient ? t('services.title') : 'What I'} <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{isClient ? t('services.titleHighlight') : 'Deliver'}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {isClient ? t('services.description') : 'Complete digital solutions that drive results and grow your business through proven strategies.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" suppressHydrationWarning={true}>
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
              {isClient ? t('technologies.badge') : '⚡ Technologies'}
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {isClient ? t('technologies.title') : 'Modern'} <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{isClient ? t('technologies.titleHighlight') : 'Stack'}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {isClient ? t('technologies.description') : 'Cutting-edge tools and technologies that power exceptional results.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-50 to-blue-100 dark:from-blue-900 dark:via-purple-900 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" suppressHydrationWarning={true}>
            <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              {isClient ? t('testimonials.badge') : '⭐ Testimonials'}
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {isClient ? t('testimonials.title') : 'What Clients'} <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{isClient ? t('testimonials.titleHighlight') : 'Say'}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-md border-border hover:border-primary/30 text-foreground hover:bg-card/90 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="border-2 border-gray-200 dark:border-white/20">
                      <AvatarImage src={`/api/placeholder/64/64`} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-gray-900 dark:text-white">{testimonial.name}</CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-200">{testimonial.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
          </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 dark:text-white/90 mb-4 italic">"{testimonial.text}"</p>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                    {testimonial.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-bounce"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center" suppressHydrationWarning={true}>
          <Badge className="mb-6 bg-gradient-to-r from-red-500 to-orange-600 text-white animate-pulse">
            {isClient ? t('cta.badge') : '🚀 Ready to Start?'}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {isClient ? t('cta.title') : 'Ready to Transform Your'} <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{isClient ? t('cta.titleHighlight') : 'Business?'}</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            {isClient ? t('cta.description') : 'Get started today and transform your business with proven digital marketing strategies that deliver real results.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-700 hover:from-red-700 hover:to-orange-800 text-white font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-red-500/25 transition-all duration-300">
              {isClient ? t('cta.button') : 'Get Started Now'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {isClient ? t('cta.urgency') : 'Limited time offer - Act now!'}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-300">
            {['30-day money-back guarantee', '24/7 support', 'Results in 30 days'].map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
                <span>{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center" suppressHydrationWarning={true}>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {isClient ? t('footer.title') : 'Let\'s Work Together'}
          </h3>
          <p className="text-gray-400 mb-6">
            {isClient ? t('footer.description') : 'Ready to take your business to the next level? Get in touch today.'}
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
              {isClient ? t('footer.links.contact') : 'Contact'}
            </Link>
            <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
              {t('footer.links.about')}
            </Link>
            <Link href="/portfolio" className="text-blue-400 hover:text-blue-300 transition-colors">
              Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
