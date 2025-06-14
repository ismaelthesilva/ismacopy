import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@ismacopy/ui/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ismacopy/ui/components/ui/card';
import { Badge } from '@ismacopy/ui/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@ismacopy/ui/components/ui/avatar';
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

function Home() {
  const [showLearnMore, setShowLearnMore] = useState(false);

  const technologies = [
    { name: 'React & Vite', icon: '⚛️', description: 'Lightning-fast web development' },
    { name: 'Tailwind CSS', icon: '🎨', description: 'Beautiful, responsive designs' },
    { name: 'shadcn/ui', icon: '🚀', description: 'Modern component library' },
    { name: 'Facebook Ads', icon: '📘', description: 'Targeted advertising campaigns' },
    { name: 'Google Ads', icon: '🔍', description: 'Search & display advertising' },
    { name: 'Hotmart Integration', icon: '💰', description: 'Digital product sales funnels' },
    { name: 'Video Editing', icon: '🎬', description: 'Professional video content' },
    { name: 'Landing Pages', icon: '📄', description: 'High-converting sales pages' }
  ];

  const services = [
    {
      title: 'Copywriting That Converts',
      description: 'Psychological triggers and persuasive copy that turns visitors into buyers',
      icon: <FileText className="h-8 w-8" />,
      features: ['Sales letters', 'Email sequences', 'Ad copy', 'VSL scripts']
    },
    {
      title: 'Landing Pages & Funnels',
      description: 'High-converting landing pages optimized for Facebook and Google Ads',
      icon: <Target className="h-8 w-8" />,
      features: ['Mobile-optimized', 'A/B tested', 'Fast loading', 'Analytics integrated']
    },
    {
      title: 'Video & Image Creation',
      description: 'Professional video sales letters and stunning visuals that sell',
      icon: <Video className="h-8 w-8" />,
      features: ['VSL production', 'Image editing', 'Social media content', 'Ad creatives']
    },
    {
      title: 'Complete Digital Marketing',
      description: 'End-to-end campaigns from ad creation to Hotmart integration',
      icon: <TrendingUp className="h-8 w-8" />,
      features: ['Campaign setup', 'Audience targeting', 'Conversion tracking', 'ROI optimization']
    }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      company: 'Fitness Digital',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'Ismael increased our conversion rate by 340% in just 30 days. His landing pages are pure gold!',
      result: '+340% conversions'
    },
    {
      name: 'Carlos Rodriguez',
      company: 'Tech Startup',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'The VSL Ismael created for us generated over R$150k in the first month. Incredible ROI!',
      result: 'R$150k in 30 days'
    },
    {
      name: 'Ana Costa',
      company: 'Online Course Creator',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'His copywriting skills are unmatched. Every email sequence he writes brings in sales.',
      result: '+250% email revenue'
    }
  ];

  const clients = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'DigitalBoost', logo: '📈' },
    { name: 'MarketPro', logo: '🎯' },
    { name: 'SalesForce+', logo: '💼' },
    { name: 'ConvertMax', logo: '🚀' },
    { name: 'GrowthLab', logo: '🧪' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-yellow-500 text-black font-semibold">
              🔥 Converting 3x Better Than Industry Average
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Turn Your Traffic Into 
              <span className="text-yellow-400"> Paying Customers</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90 leading-relaxed">
              Complete digital marketing solutions that convert visitors into buyers. 
              From copywriting to landing pages, video creation to ad campaigns - 
              <strong className="text-yellow-400"> all in one place.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4">
                Get Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-foreground/30 text-foreground hover:bg-foreground/10 backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>R$5M+ Generated</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Average 3.4x ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8 font-medium">
            Trusted by Leading Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                <span className="text-3xl">{client.logo}</span>
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Complete Solution
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Everything You Need to <span className="text-blue-600">Scale Your Business</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop juggling multiple agencies. Get copywriting, web development, 
              video creation, and ad management from one expert team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              Cutting-Edge Tech
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Built With The <span className="text-purple-600">Latest Technologies</span>
            </h2>
            <p className="text-xl text-gray-600">
              We use the most advanced tools to ensure your campaigns perform at their peak
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-500 text-black">
              Real Results
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">
              What Our Clients Say About <span className="text-yellow-400">Working With Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-white">{testimonial.name}</CardTitle>
                      <CardDescription className="text-blue-200">{testimonial.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4 italic">"{testimonial.text}"</p>
                  <Badge className="bg-green-500 text-white">
                    {testimonial.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-red-600 text-white animate-pulse">
            🚨 Limited Time Offer
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to <span className="text-yellow-400">10x Your Conversions?</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Book your free strategy call now and discover how we can transform your traffic 
            into a profit-generating machine. No fluff, just proven strategies that work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4">
              Book Your FREE Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="text-sm text-gray-400">
              ⏰ Only 5 spots available this week
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>100% Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Custom Strategy Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>No Obligation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ismael Silva - Digital Marketing Expert</h3>
          <p className="text-gray-400 mb-6">
            Transforming businesses through high-converting copy and cutting-edge technology
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/contact" className="text-blue-400 hover:text-blue-300">
              Get In Touch
            </Link>
            <Link to="/about" className="text-blue-400 hover:text-blue-300">
              Learn More About Us
            </Link>
            <Link to="/app/dashboard" className="text-blue-400 hover:text-blue-300">
              Client Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;