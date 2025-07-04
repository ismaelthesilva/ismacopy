import React from 'react';
import { Link } from 'react-router-dom';
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
  const { t } = useLanguage();

  const technologies = [
    { name: 'React & Vite', icon: '⚛️', description: t('technologies.items.react') },
    { name: 'Tailwind CSS', icon: '🎨', description: t('technologies.items.tailwind') },
    { name: 'shadcn/ui', icon: '🚀', description: t('technologies.items.shadcn') },
    { name: 'Facebook Ads', icon: '📘', description: t('technologies.items.facebook') },
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
      features: t('services.copywriting.features')
    },
    {
      title: t('services.landingPages.title'),
      description: t('services.landingPages.description'),
      icon: <Target className="h-8 w-8" />,
      features: t('services.landingPages.features')
    },
    {
      title: t('services.videoCreation.title'),
      description: t('services.videoCreation.description'),
      icon: <Video className="h-8 w-8" />,
      features: t('services.videoCreation.features')
    },
    {
      title: t('services.digitalMarketing.title'),
      description: t('services.digitalMarketing.description'),
      icon: <TrendingUp className="h-8 w-8" />,
      features: t('services.digitalMarketing.features')
    }
  ];

  const testimonials = t('testimonials.items');

  const clients = [
    { name: 'TechNova', logo: '🏢' },
    { name: 'Boostly', logo: '📈' },
    { name: 'MarketEdge', logo: '🎯' },
    { name: 'SalesSuite', logo: '💼' },
    { name: 'LaunchMax', logo: '🚀' },
    { name: 'GrowthForge', logo: '🧪' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-background text-foreground">
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
            <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold animate-pulse">
              {t('hero.badge')}
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('hero.title')} 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> {t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90 leading-relaxed text-gray-300">
              {t('hero.description')} 
              <strong className="text-yellow-400"> {t('hero.descriptionHighlight')}</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300">
                {t('hero.ctaPrimary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5" />
                {t('hero.ctaSecondary')}
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span>500+ {t('hero.socialProof.clients')}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span>R$5M+ {t('hero.socialProof.revenue')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span>3.4x {t('hero.socialProof.roi')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 font-medium">
            {t('clients.title')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center gap-2 text-2xl font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="text-3xl">{client.logo}</span>
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              {t('services.badge')}
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('services.title')} <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{t('services.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-blue-500/10">
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
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
              {t('technologies.badge')}
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('technologies.title')} <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{t('technologies.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('technologies.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center bg-white dark:bg-slate-700/50 backdrop-blur-sm border-gray-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-500/10">
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
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              {t('testimonials.badge')}
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('testimonials.title')} <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{t('testimonials.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 dark:bg-white/10 backdrop-blur-md border-gray-200/50 dark:border-white/20 text-gray-900 dark:text-white hover:bg-white/90 dark:hover:bg-white/15 transition-all duration-300">
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
        
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-red-500 to-orange-600 text-white animate-pulse">
            {t('cta.badge')}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('cta.title')} <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{t('cta.titleHighlight')}</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
            {t('cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-700 hover:from-red-700 hover:to-orange-800 text-white font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-red-500/25 transition-all duration-300">
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t('cta.urgency')}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-300">
            {t('cta.guarantees').map((guarantee, index) => (
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
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t('footer.title')}
          </h3>
          <p className="text-gray-400 mb-6">
            {t('footer.description')}
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
              {t('footer.links.contact')}
            </Link>
            <Link to="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
              {t('footer.links.about')}
            </Link>
            <Link to="/app/dashboard" className="text-blue-400 hover:text-blue-300 transition-colors">
              {t('footer.links.dashboard')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}