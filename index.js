import React from "react";

const games = [
  {
    name: "Call of Duty: Mobile",
    platform: "Android / iOS",
    video: "https://www.youtube.com/embed/0e6JVAJ7fKQ",
    description: "Fast-paced multiplayer and battle royale experience on mobile.",
    link: "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter",
  },
  {
    name: "Valorant",
    platform: "PC",
    video: "https://www.youtube.com/embed/e_E9W2vsRbQ",
    description: "5v5 tactical shooter with unique agents and abilities.",
    link: "https://playvalorant.com/",
  },
  {
    name: "Genshin Impact",
    platform: "PC / Mobile",
    video: "https://www.youtube.com/embed/HLUY1vN7QyU",
    description: "Open-world RPG with stunning visuals and action combat.",
    link: "https://genshin.hoyoverse.com/en",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Top Free Mobile & PC Games</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md">
            <div className="aspect-video mb-4">
              <iframe
                src={game.video}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={game.name}
              ></iframe>
            </div>
            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
            <p className="text-sm mb-2">Platform: {game.platform}</p>
            <p className="mb-4 text-sm text-gray-300">{game.description}</p>
            <a href={game.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded">
              Play Now
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}