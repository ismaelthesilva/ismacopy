import React from 'react';

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
    url: "https://bjjchamp.net/worldinjapan",
    image: "/images/bjjchamp-nz.png",
    description: "Landing page for BJJ Champ Brazil."
  },
  {
    name: "BJJ Mentoria",
    url: "https://bjjchamp.net/bjjmentoria",
    image: "/images/bjjmentoria.png",
    description: "Mentorship program landing page."
  },
];

const adsAndVsl = [
  {
    name: "BJJ Champ VSL",
    url: "https://www.youtube.com/embed/U0G6nVuYGF4?si=GVPnH0ey3oqPoBFC",
    videoId: "U0G6nVuYGF4",
    description: "Video Sales Letter for BJJ Champ."
  },
  {
    name: "Jackie Souto Ads",
    url: "https://youtube.com/shorts/z0E8Fp5p20w?si=u-MEFrIJrrOft8ZA",
    videoId: "z0E8Fp5p20w",
    description: "Ad creatives for Jackie Souto."
  },
];

// Function to get YouTube thumbnail URL
const getYouTubeThumbnail = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

export default function Porfolio() {
  console.log('Portfolio rendering...');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🎨 My Work
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Portfolio</h1>
            <p className="text-xl text-slate-600">Explore my digital projects, landing pages, and marketing campaigns that drive results.</p>
          </div>
          
          {/* Main Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Main Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioPages.map((site) => (
                <div key={site.name} className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{site.name}</h3>
                  <img src={site.image} alt={site.name} className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
                  <p className="text-slate-600 mb-6 leading-relaxed">{site.description}</p>
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Visit Site
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Landing Pages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Landing Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {landingPages.map((site) => (
                <div key={site.name} className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{site.name}</h3>
                  <img src={site.image} alt={site.name} className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
                  <p className="text-slate-600 mb-6 leading-relaxed">{site.description}</p>
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Visit Site
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Ads & VSL - WITH YOUTUBE THUMBNAILS */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Ads & VSL</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adsAndVsl.map((video) => (
                <div key={video.name} className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{video.name}</h3>
                  
                  {/* YouTube Thumbnail with Play Button Overlay */}
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden group">
                    <img 
                      src={getYouTubeThumbnail(video.videoId)} 
                      alt={video.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">{video.description}</p>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-block text-center bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Watch Video
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}