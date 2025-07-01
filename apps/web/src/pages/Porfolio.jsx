import React from 'react';
import { Link } from 'react-router-dom';
// Import shadcn/ui Card and Button components
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";


const portfolioPages = [
  {
    name: "BJJ Champ",
    url: "https://bjjchamp.com",
    image: "/images/bjjchamp-home.jpeg",
    description: "Brazilian Jiu-Jitsu online platform for athletes and fans."
  },
  {
    name: "Jackie Souto",
    url: "https://jackiesouto.com",
    image: "/images/bjjmentoria.png",
    description: "Personal brand and mentorship for BJJ world champion Jackie Souto."
  },
  {
    name: "Ismael Silva",
    url: "https://ismaelsilva.org",
    image: "/images/bjj-casos.jpg",
    description: "Personal portfolio and web projects by Ismael Silva."
  },
  {
    name: "Soute Doces",
    url: "https://soutedoces.com",
    image: "/images/bjjstory-usa.png",
    description: "Brazilian sweets e-commerce and local delivery."
  },
  {
    name: "BlazeFitness",
    url: "#",
    image: "/images/open-arms-champ.jpg",
    description: "Fitness and wellness platform (coming soon)."
  },
];

const landingPages = [
  {
    name: "BJJ Champ BR Landing",
    url: "https://bjjchamp.com.br",
    image: "/images/bjjchamp-nz.png",
    description: "Landing page for BJJ Champ Brazil."
  },
  {
    name: "BJJ Mentoria",
    url: "https://bjjmentoria.com",
    image: "/images/bjjmentoria.png",
    description: "Mentorship program landing page."
  },
];

const adsAndVsl = [
  {
    name: "BJJ Champ VSL",
    url: "https://bjjchamp.com/vsl",
    image: "/images/space-bg.jpg",
    description: "Video Sales Letter for BJJ Champ."
  },
  {
    name: "Jackie Souto Ads",
    url: "https://jackiesouto.com/ads",
    image: "/images/7diasgarantia.png",
    description: "Ad creatives for Jackie Souto."
  },
];


export default function Porfolio() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Main Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioPages.map((site) => (
            <Card key={site.name} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{site.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <img src={site.image} alt={site.name} className="rounded mb-3 object-cover w-full h-40" />
                <p className="mb-4 text-gray-700 flex-1">{site.description}</p>
                <Button asChild variant="outline">
                  <a href={site.url} target="_blank" rel="noopener noreferrer">Visit</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Landing Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landingPages.map((site) => (
            <Card key={site.name} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{site.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <img src={site.image} alt={site.name} className="rounded mb-3 object-cover w-full h-40" />
                <p className="mb-4 text-gray-700 flex-1">{site.description}</p>
                <Button asChild variant="outline">
                  <a href={site.url} target="_blank" rel="noopener noreferrer">Visit</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ads & VSL</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adsAndVsl.map((site) => (
            <Card key={site.name} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{site.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <img src={site.image} alt={site.name} className="rounded mb-3 object-cover w-full h-40" />
                <p className="mb-4 text-gray-700 flex-1">{site.description}</p>
                <Button asChild variant="outline">
                  <a href={site.url} target="_blank" rel="noopener noreferrer">Visit</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}