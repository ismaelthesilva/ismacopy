'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Code, Zap, Target, TrendingUp, Globe, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

// Technology stack mappings
const techStacks = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
  backend: ['Node.js', 'Supabase', 'PostgreSQL', 'API Design'],
  tools: ['Git', 'Vercel', 'VS Code', 'Figma', 'Analytics'],
  marketing: ['Copywriting', 'VSL Creation', 'Landing Pages', 'Conversion Optimization']
};

const portfolioPages = [
  {
    name: "BJJ Champ Platform",
    url: "https://bjjchamp.net",
    image: "/images/bjjchampHome.png", 
    category: "Full-Stack Web Application",
    description: "Complete Brazilian Jiu-Jitsu ecosystem with athlete profiles, competition tracking, and fan engagement. Built for scalability with 10K+ monthly active users.",
    technologies: ['React', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    highlights: ['Real-time data', 'User authentication', 'Mobile-responsive', 'SEO optimized'],
    results: "40% increase in user engagement, 25% boost in session duration",
    impact: "🏆 Leading platform for BJJ community in Brazil"
  },
  {
    name: "Jackie Souto Brand",
    url: "https://jackiesouto.com",
    image: "/images/jackieHome.png",
    category: "Personal Brand Website",
    description: "Professional website for BJJ World Champion Jackie Souto. Features course sales, mentorship programs, and personal branding with integrated payment systems.",
    technologies: ['React', 'Next.js', 'Stripe API', 'Video Integration', 'SEO'],
    highlights: ['Payment integration', 'Video streaming', 'Course management', 'Multi-language'],
    results: "300% increase in course enrollments, $50K+ in direct sales",
    impact: "💰 Transformed personal brand into profitable business"
  },
  {
    name: "Investment Dashboard",
    url: "https://ismaelsilva.com/dashboard",
    image: "/images/investmentsHome.png",
    category: "Financial Analytics Platform",
    description: "Comprehensive investment tracking dashboard with real-time market data for Brazilian and US markets. Features portfolio analysis, financial metrics, and performance tracking.",
    technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'CSV Analytics', 'Chart.js'],
    highlights: ['Real-time data', 'Financial calculations', 'Multi-currency', 'Portfolio tracking'],
    results: "Built with real 5-year financial metrics for 60+ investments",
    impact: "📊 Enterprise-grade financial analysis tool"
  },
  {
    name: "Soute Doces E-commerce",
    url: "https://soutedoces.com",
    image: "/images/souteDocesHome.png",
    category: "E-commerce Platform",
    description: "Full-featured e-commerce platform for Brazilian sweets with inventory management, payment processing, and local delivery integration.",
    technologies: ['React', 'Node.js', 'Payment Gateway', 'Inventory System', 'Maps API'],
    highlights: ['Shopping cart', 'Payment processing', 'Delivery tracking', 'Admin dashboard'],
    results: "Reduced order processing time by 60%, increased sales by 180%",
    impact: "🛒 Complete digital transformation for local business"
  },
  {
    name: "BlazeFitness Platform",
    url: "https://blazefitness-five.vercel.app",
    image: "/images/blazeFitnessHome.png",
    category: "Fitness Web Application",
    description: "Modern fitness platform with workout tracking, progress analytics, and social features. Built with performance optimization and mobile-first approach.",
    technologies: ['React', 'Vite', 'PWA', 'LocalStorage', 'Responsive Design'],
    highlights: ['Offline capability', 'Progress tracking', 'Social features', 'Mobile-first'],
    results: "90+ Lighthouse performance score, 95% mobile usability",
    impact: "💪 High-performance fitness tracking solution"
  }
];

const marketingProjects = [
  {
    name: "High-Converting BJJ Landing",
    url: "https://bjjchamp.net/worldinjapan",
    image: "/images/bjjchamp-nz.png",
    category: "Landing Page",
    description: "Conversion-optimized landing page for BJJ World Championship in Japan. Implemented persuasive copywriting and strategic CTA placement.",
    copywritingFocus: "Pain-point targeting, social proof integration, urgency creation",
    conversionRate: "12.5% conversion rate (3x industry average)",
    results: "Generated $25K+ in ticket sales within 30 days",
    impact: "� Proven high-conversion copywriting skills"
  },
  {
    name: "Mentorship Program VSL",
    url: "https://bjjchamp.net/bjjmentoria",
    image: "/images/bjjmentoria.png",
    category: "Video Sales Letter",
    description: "Complete VSL funnel for BJJ mentorship program with storytelling, objection handling, and strategic offer presentation.",
    copywritingFocus: "Story-driven sales, emotional triggers, authority building",
    conversionRate: "8.7% video-to-sale conversion",
    results: "$40K+ in program enrollments, 150+ active students",
    impact: "🎓 Master-level VSL creation and funnel optimization"
  }
];

const adCreatives = [
  {
    name: "BJJ Championship Promo",
    url: "https://youtube.com/shorts/h8J-Qmmf0xk",
    image: "https://img.youtube.com/vi/h8J-Qmmf0xk/hqdefault.jpg",
    category: "YouTube Shorts Ad",
    description: "High-engagement YouTube Shorts ad for BJJ Championship. Optimized for mobile viewing with hook-focused first 3 seconds.",
    performance: "50K+ views, 4.2% engagement rate",
    copyStrategy: "Pattern interrupt, curiosity gap, clear CTA",
    impact: "📱 Viral-ready mobile advertising"
  }
];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4 md:px-0">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{t('portfolio.badge')}</span>
          </div>
          <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('portfolio.title')}
          </h1>
          <div className="max-w-5xl mx-auto bg-card p-10 rounded-xl shadow-xl border">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Code className="h-8 w-8 text-blue-600" />
              <h2 className="text-4xl font-bold">Full-Stack Developer + Copywriter</h2>
              <Zap className="h-8 w-8 text-yellow-500" />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I don't just build applications—I create <span className="font-semibold text-blue-600">business-driving solutions</span>.<br />
              <span className="inline-block mt-2">🚀 <strong>My unique edge?</strong> I combine expert-level development skills with persuasive copywriting to deliver:</span>
            </p>
            
            {/* Value Propositions */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-lg mb-2">High-Converting Websites</h3>
                <p className="text-sm text-muted-foreground">Landing pages that turn visitors into customers (proven 12.5% conversion rates)</p>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold text-lg mb-2">Scalable Applications</h3>
                <p className="text-sm text-muted-foreground">Full-stack platforms handling 10K+ users with real-time data</p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-bold text-lg mb-2">Revenue-Focused Copy</h3>
                <p className="text-sm text-muted-foreground">VSLs and ad copy that generated $100K+ in direct sales</p>
              </div>
            </div>

            {/* Tech Stack Display */}
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-lg mb-4 text-center">💻 Technology Arsenal</h3>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-1">
                    {techStacks.frontend.map((tech) => (
                      <span key={tech} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-1">
                    {techStacks.backend.map((tech) => (
                      <span key={tech} className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-1">
                    {techStacks.tools.map((tech) => (
                      <span key={tech} className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Marketing</h4>
                  <div className="flex flex-wrap gap-1">
                    {techStacks.marketing.map((tech) => (
                      <span key={tech} className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg font-medium text-center">
              💼 <strong>Ready to boost your business?</strong> Let's build something that converts.
            </p>
          </div>
        </div>

        {/* Main Projects Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">🚀 Featured Development Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real applications serving thousands of users. Each project showcases technical excellence with measurable business impact.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {portfolioPages.map((project) => (
              <div key={project.name} className="bg-card rounded-xl shadow-xl border overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm text-blue-600">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm text-green-600">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((feature) => (
                        <span key={feature} className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded text-sm">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2 text-sm text-blue-700 dark:text-blue-300">📊 Results:</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{project.results}</p>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg mb-6">
                    <p className="text-sm font-medium text-purple-700 dark:text-purple-300">{project.impact}</p>
                  </div>

                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Marketing Projects Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">🎯 High-Converting Marketing Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Copywriting that converts. These projects prove I understand both code and customer psychology.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {marketingProjects.map((project) => (
              <div key={project.name} className="bg-card rounded-xl shadow-xl border overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.conversionRate}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Copywriting Focus */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm text-orange-600">Copywriting Strategy:</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      {project.copywritingFocus}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2 text-sm text-green-700 dark:text-green-300">💰 Revenue Impact:</h4>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">{project.results}</p>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg mb-6">
                    <p className="text-sm font-medium text-purple-700 dark:text-purple-300">{project.impact}</p>
                  </div>

                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 font-semibold"
                  >
                    <Target className="mr-2 h-4 w-4" />
                    View Campaign
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ad Creatives Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">📱 Viral Ad Creatives</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ads that stop the scroll and drive action. Mobile-optimized creative with proven engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adCreatives.map((ad) => (
              <div key={ad.name} className="bg-card rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={ad.image} alt={ad.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {ad.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{ad.name}</h3>
                  <p className="text-muted-foreground mb-4">{ad.description}</p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-4">
                    <h4 className="font-semibold text-sm text-blue-700 dark:text-blue-300 mb-2">📊 Performance:</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{ad.performance}</p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg mb-4">
                    <h4 className="font-semibold text-sm text-purple-700 dark:text-purple-300 mb-2">🧠 Copy Strategy:</h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400">{ad.copyStrategy}</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-3 rounded-lg mb-6">
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">{ad.impact}</p>
                  </div>

                  <a 
                    href={ad.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-colors font-semibold"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Watch Ad
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you need a high-converting website, scalable application, or persuasive marketing copy—I deliver results that drive revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-card text-primary rounded-lg hover:bg-muted/80 border border-border transition-colors font-bold text-lg"
              >
                <Zap className="mr-2 h-5 w-5" />
                Let's Work Together
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
