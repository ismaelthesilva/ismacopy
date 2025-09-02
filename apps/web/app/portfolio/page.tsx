'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const portfolioPages = [
  {
    name: "BJJ Champ",
    url: "https://bjjchamp.net",
    image: "/images/bjjchamp-home.jpeg",
    description: "Brazilian Jiu-Jitsu online platform for athletes and fans.",
    tech: ['⚛️', '▲', '💨'] // React, Next.js, Tailwind
  },
  {
    name: "Jackie Souto",
    url: "https://jackiesouto.com",
    image: "/images/bjjmentoria.png",
    description: "Personal brand and mentorship for BJJ world champion Jackie Souto.",
    tech: ['⚛️', '💨', '🎬'] // React, Tailwind, Video
  },
  {
    name: "Ismael Silva",
    url: "https://ismaelsilva.org",
    image: "/images/bjj-casos.jpg",
    description: "Personal portfolio and web projects by Ismael Silva.",
    tech: ['⚛️', '💨', '📱'] // React, Tailwind, Responsive
  },
  {
    name: "Soute Doces",
    url: "https://soutedoces.com",
    image: "/images/bjjstory-usa.png",
    description: "Brazilian sweets e-commerce and local delivery.",
    tech: ['⚛️', '💨', '🛒'] // React, Tailwind, E-commerce
  },
  {
    name: "BlazeFitness",
    url: "https://blazefitness-five.vercel.app",
    image: "/images/open-arms-champ.jpg",
    description: "Fitness and wellness platform.",
    tech: ['⚛️', '💨', '💪'] // React, Tailwind, Fitness
  },
];

const landingPages = [
  {
    name: "BJJ Champ BR Landing",
    url: "https://bjjchamp.net/worldinjapan",
    image: "/images/bjjchamp-nz.png",
    description: "Landing page for BJJ Champ Brazil.",
    tech: ['📄', '🎯', '📈'] // Landing, Targeting, Analytics
  },
  {
    name: "BJJ Mentoria",
    url: "https://bjjchamp.net/bjjmentoria",
    image: "/images/bjjmentoria.png",
    description: "Mentorship program landing page.",
    tech: ['📄', '🎓', '💼'] // Landing, Education, Business
  },
];

const vslPages = [
  {
    name: "BJJ World Championship",
    url: "https://bjjchamp.net/worldinjapan",
    image: "/images/world-japan.jpg",
    description: "Video Sales Letter for BJJ World Championship.",
    tech: ['🎬', '📹', '💰'] // Video, VSL, Sales
  },
  {
    name: "Jackie Souto Coach",
    url: "https://jackiesouto.com/nzcoachonline",
    image: "/images/nzcoach-online.png",
    description: "Coaching program video sales letter.",
    tech: ['🎬', '🎓', '🌟'] // Video, Education, Success
  },
];

const adsPages = [
  {
    name: "BJJ Champ Ad",
    url: "https://youtube.com/shorts/h8J-Qmmf0xk",
    image: "https://img.youtube.com/vi/h8J-Qmmf0xk/hqdefault.jpg",
    description: "YouTube Shorts ad for BJJ Champ.",
    tech: ['📱', '🎬', '📢'] // Mobile, Video, Advertising
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-6 text-primary">Ismael Silva Portfolio</h1>
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border">
            <h2 className="text-3xl font-bold mb-4">🚀 Full Stack Web Developer</h2>
            <p className="text-lg text-muted-foreground">
              I build beautiful, scalable, and user-focused web applications.<br />
              <span className="inline-block mt-2 mb-2">✍️</span> My edge? I combine technical expertise with <span className="font-semibold text-blue-600">copywriting</span> skills to craft high-converting landing pages, persuasive VSLs, and engaging ad creatives.<br />
              <span className="inline-block mt-2">👇 Explore my best work below!</span>
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Main Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioPages.map((site) => (
              <div key={site.name} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
                  <img src={site.image} alt={site.name} className="rounded mb-4 object-cover w-full h-44 border" />
                  <div className="flex justify-center gap-2 mb-4">
                    {site.tech && site.tech.map((icon, idx) => (
                      <span key={idx} className="text-2xl">{icon}</span>
                    ))}
                  </div>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">{site.description}</p>
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Project <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Landing Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingPages.map((site) => (
              <div key={site.name} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
                  <img src={site.image} alt={site.name} className="rounded mb-4 object-cover w-full h-44 border" />
                  <div className="flex justify-center gap-2 mb-4">
                    {site.tech && site.tech.map((icon, idx) => (
                      <span key={idx} className="text-2xl">{icon}</span>
                    ))}
                  </div>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">{site.description}</p>
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Landing <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">VSL</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vslPages.map((site) => (
              <div key={site.name} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
                  <img src={site.image} alt={site.name} className="rounded mb-4 object-cover w-full h-44 border" />
                  <div className="flex justify-center gap-2 mb-4">
                    {site.tech && site.tech.map((icon, idx) => (
                      <span key={idx} className="text-2xl">{icon}</span>
                    ))}
                  </div>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">{site.description}</p>
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Watch VSL <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-primary">Ads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adsPages.map((site) => (
              <div key={site.name} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
                  <img src={site.image} alt={site.name} className="rounded mb-4 object-cover w-full h-44 border" />
                  <div className="flex justify-center gap-2 mb-4">
                    {site.tech && site.tech.map((icon, idx) => (
                      <span key={idx} className="text-2xl">{icon}</span>
                    ))}
                  </div>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">{site.description}</p>
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Ad <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
