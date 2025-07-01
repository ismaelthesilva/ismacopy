import React from 'react';
import { Link } from 'react-router-dom';
// Import shadcn/ui Card and Button components
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { SiReact, SiTailwindcss, SiNextdotjs, SiVite, SiSupabase } from "react-icons/si";


const portfolioPages = [
	{
		name: "BJJ Champ",
		url: "https://bjjchamp.net",
		image: "/images/bjjchamp-web.jpeg",
		description: "Brazilian Jiu-Jitsu online platform for athletes and fans.",
		tech: [<SiReact key="react" className="text-sky-400" />, <SiVite key="vite" className="text-purple-500" />, <SiNextdotjs key="next" className="text-black" />, <SiSupabase key="supabase" className="text-green-600" />, <SiTailwindcss key="tailwind" className="text-cyan-400" />],
	},
	{
		name: "Jackie Souto",
		url: "https://jackiesouto.com",
		image: "/images/jackie-web.png",
		description: "Personal brand and mentorship for BJJ world champion Jackie Souto.",
		tech: [<SiReact key="react" className="text-sky-400" />, <SiNextdotjs key="next" className="text-black" />, <SiTailwindcss key="tailwind" className="text-cyan-400" />],
	},
	{
		name: "Ismael Silva",
		url: "https://ismaelsilva.org",
		image: "/images/ministry-web.jpg",
		description: "Personal portfolio and web projects by Ismael Silva.",
		tech: [<SiReact key="react" className="text-sky-400" />, <SiTailwindcss key="tailwind" className="text-cyan-400" />],
	},
	{
		name: "Soute Doces",
		url: "https://soutedoces.com",
		image: "/images/soutedoces.png",
		description: "Brazilian sweets e-commerce and local delivery.",
		tech: [<SiReact key="react" className="text-sky-400" />, <SiTailwindcss key="tailwind" className="text-cyan-400" />],
	},
	{
		name: "BlazeFitness",
		url: "https://blazefitness-five.vercel.app",
		image: "/images/blaze-fitness.jpg",
		description: "Fitness and wellness platform (coming soon).",
		tech: [<SiReact key="react" className="text-sky-400" />, <SiTailwindcss key="tailwind" className="text-cyan-400" />],
	},
];

const landingPages = [
	{
		name: "BJJ Champ BR Landing",
		url: "https://www.bjjchamp.net/worldinjapan",
		image: "/images/bjjchamp-nz.png",
		description: "Landing page for BJJ Champ Brazil."
	},
	{
		name: "BJJ Mentoria",
		url: "https://www.bjjchamp.net/bjjmentoria",
		image: "/images/bjjmentoria.png",
		description: "Mentorship program landing page."
	},
];

const adsAndVsl = [
	{
		name: "BJJ World Championship",
		url: "https://www.bjjchamp.net/worldinjapan",
		image: "/images/world-japan.jpg",
		description: "Video Sales Letter for BJJ Champ."
	},
	{
		name: "Jackie Souto Ads",
		url: "https://www.jackiesouto.com/nzcoachonline",
		image: "/images/nzcoach-online.png",
		description: "Ad creatives for Jackie Souto."
	},
];

const vslPages = [
	...adsAndVsl, // move all current VSL and Ads here
];

const adsPages = [
	{
		name: "BJJ Champ Ad",
		url: "https://youtube.com/shorts/h8J-Qmmf0xk?si=riE0J7-ltX92xkLR",
		image: "https://img.youtube.com/vi/h8J-Qmmf0xk/hqdefault.jpg",
		description: "YouTube Shorts ad for BJJ Champ."
	},
	{
		name: "[Your Ad Here]",
		url: "#",
		image: "/images/placeholder-ad.png",
		description: "Add your next ad here."
	},
	{
		name: "[Your Ad Here]",
		url: "#",
		image: "/images/placeholder-ad.png",
		description: "Add your next ad here."
	}
];

const techIcons = [
	{ icon: <SiReact className="text-sky-400" />, name: "React" },
	{ icon: <SiVite className="text-purple-500" />, name: "Vite" },
	{ icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
	{ icon: <SiSupabase className="text-green-600" />, name: "Supabase" },
	{ icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
];


export default function Portfolio() {
	return (
		<div className="container mx-auto py-12 px-4 md:px-0">
			<h1 className="text-5xl font-extrabold mb-10 text-center text-primary">Ismael Silva Portfolio</h1>
			
			<Card className="mb-12 max-w-2xl mx-auto bg-background/80 shadow-lg border border-border">
				<CardHeader>
					<CardTitle className="text-3xl text-center">
						🚀 Full Stack Web Developer
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-lg text-center text-muted-foreground">
						I build beautiful, scalable, and user-focused web applications.<br />
						<span className="inline-block mt-2 mb-2">✍️</span> My edge? I combine technical expertise with <span className="font-semibold text-primary">copywriting</span> skills to craft high-converting landing pages, persuasive VSLs, and engaging ad creatives.<br />
						<span className="inline-block mt-2">👇 Explore my best work below!</span>
					</p>
				</CardContent>
			</Card>

			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-6 text-primary">Main Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{portfolioPages.map((site) => (
						<Card key={site.name} className="flex flex-col h-full shadow-lg border border-border bg-card">
							<CardHeader>
								<CardTitle className="text-xl font-semibold">{site.name}</CardTitle>
							</CardHeader>
							<CardContent className="flex-1 flex flex-col">
								<img src={site.image} alt={site.name} className="rounded mb-4 object-cover w-full h-44 border" />
								<div className="flex justify-center gap-2 mb-2">
									{site.tech && site.tech.map((icon, idx) => (
										<span key={idx} className="text-2xl">{icon}</span>
									))}
								</div>
								<p className="mb-6 text-gray-700 flex-1">{site.description}</p>
								<Button asChild variant="default" className="w-full mt-auto">
									<a href={site.url} target="_blank" rel="noopener noreferrer">Visit Project</a>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-6 text-primary">Landing Pages</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{landingPages.map((site) => (
						<Card key={site.name} className="flex flex-col h-full shadow-lg border border-border bg-card">
							<CardHeader>
								<CardTitle className="text-xl font-semibold">{site.name}</CardTitle>
							</CardHeader>
							<CardContent className="flex-1 flex flex-col">
								<img src={site.image} alt={site.name} className="rounded mb-4 object-cover w-full h-44 border" />
								<p className="mb-6 text-gray-700 flex-1">{site.description}</p>
								<Button asChild variant="default" className="w-full mt-auto">
									<a href={site.url} target="_blank" rel="noopener noreferrer">Visit Landing</a>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section className="mb-16">
				<h2 className="text-3xl font-bold mb-6 text-primary">VSL</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{vslPages.map((site) => (
						<Card key={site.name} className="flex flex-col h-full shadow-lg border border-border bg-card">
							<CardHeader>
								<CardTitle className="text-xl font-semibold">{site.name}</CardTitle>
							</CardHeader>
							<CardContent className="flex-1 flex flex-col">
								<img src={site.image} alt={site.name} className="rounded mb-4 object-cover w-full h-44 border" />
								<p className="mb-6 text-gray-700 flex-1">{site.description}</p>
								<Button asChild variant="default" className="w-full mt-auto">
									<a href={site.url} target="_blank" rel="noopener noreferrer">Watch VSL</a>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<section>
				<h2 className="text-3xl font-bold mb-6 text-primary">Ads</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{adsPages.map((site) => (
						<Card key={site.name} className="flex flex-col h-full shadow-lg border border-border bg-card">
							<CardHeader>
								<CardTitle className="text-xl font-semibold">{site.name}</CardTitle>
							</CardHeader>
							<CardContent className="flex-1 flex flex-col">
								<img src={site.image} alt={site.name} className="rounded mb-4 object-cover w-full h-44 border" />
								<p className="mb-6 text-gray-700 flex-1">{site.description}</p>
								<Button asChild variant="default" className="w-full mt-auto">
									<a href={site.url} target="_blank" rel="noopener noreferrer">View Ad</a>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}