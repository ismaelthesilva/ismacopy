'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  User,
  TrendingUp,
  Code,
  Edit3,
  Globe,
  Target,
  Heart,
  Lightbulb,
  Users,
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const journey = [
    {
      icon: <User className="h-6 w-6" />,
      title: t('about.journey.steps.beginning.title'),
      period: t('about.journey.steps.beginning.period'),
      description: t('about.journey.steps.beginning.description')
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: t('about.journey.steps.pivot.title'),
      period: t('about.journey.steps.pivot.period'),
      description: t('about.journey.steps.pivot.description')
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: t('about.journey.steps.evolution.title'),
      period: t('about.journey.steps.evolution.period'),
      description: t('about.journey.steps.evolution.description')
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: t('about.journey.steps.ismaCopy.title'),
      period: t('about.journey.steps.ismaCopy.period'),
      description: t('about.journey.steps.ismaCopy.description')
    }
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: t('about.services.development.title'),
      description: t('about.services.development.description'),
      features: t('about.services.development.features', { returnObjects: true })
    },
    {
      icon: <Edit3 className="h-8 w-8 text-green-600" />,
      title: t('about.services.copywriting.title'),
      description: t('about.services.copywriting.description'),
      features: t('about.services.copywriting.features', { returnObjects: true })
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: t('about.services.strategy.title'),
      description: t('about.services.strategy.description'),
      features: t('about.services.strategy.features', { returnObjects: true })
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: t('about.values.clientFocused.title'),
      description: t('about.values.clientFocused.description')
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: t('about.values.globalMindset.title'),
      description: t('about.values.globalMindset.description')
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-2">
              {t('about.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
              {t('about.hero.title')} <span className="text-blue-600">{t('about.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('about.journey.title')}</h2>
              <p className="text-lg text-slate-600">{t('about.journey.subtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {journey.map((step, index) => (
                <Card key={index} className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                      {step.icon}
                    </div>
                    <CardTitle className="text-lg text-slate-900">{step.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">{step.period}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-6 border-2 border-blue-200">
                    <img 
                      src="/images/isma-profile21.jpg" 
                      alt="Ismael Silva - Founder of ismaCopy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{t('about.personal.name')}</h3>
                    <p className="text-lg text-blue-600">{t('about.personal.title')}</p>
                  </div>
                </div>
                
                <div className="prose prose-lg text-slate-600 leading-relaxed">
                  <p className="mb-4">
                    {t('about.personal.story.paragraph1')}
                  </p>
                  
                  <p className="mb-4">
                    {t('about.personal.story.paragraph2')}
                  </p>
                  
                  <p className="mb-4">
                    {t('about.personal.story.paragraph3')}
                  </p>
                  
                  <p>
                    {t('about.personal.story.paragraph4')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('about.services.title')}</h2>
              <p className="text-lg text-slate-600">{t('about.services.subtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <CardHeader className="text-center flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2 mt-auto">
                      {service.features.map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pt-4 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('about.values.title')}</h2>
              <p className="text-lg text-slate-600">{t('about.values.subtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">{t('about.cta.title')}</h2>
                <p className="text-xl mb-8 text-blue-100">
                  {t('about.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                    {t('about.cta.strategyCall')}
                  </Button>
                  <Link href="/portfolio">
                    <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 w-full">
                      {t('about.cta.portfolio')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
