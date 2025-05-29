import React from "react";

export default function G2GLanding() {
  return (
    <div className="min-h-screen">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Header */}
      <div
        className="bg-[radial-gradient(81.67%_100%_at_50%_0%,_#b5002c_0%,_#5f004c_60%,_#212224_90%)]
"
      >
        <header className="flex items-center justify-between px-4 lg:px-6 py-3">
          <div className="flex items-center gap-2">
            <img
              src="https://assets.g2g.com/ui/img/logo-white.png"
              alt="G2G Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="flex items-center bg-white rounded-full px-4 py-2.5 w-full">
              <input
                type="text"
                placeholder="Search games, items, accounts..."
                className="flex-1 outline-none text-sm text-gray-700"
              />
              <div className="flex items-center gap-2 text-gray-600 border-l border-gray-300 pl-3 ml-3">
                <span className="text-sm">All services</span>
                <span className="text-xs">▼</span>
              </div>
              <button className="ml-3 p-1">
                <span className="w-5 h-5 text-white bg-[#F97316] rounded-full p-1 flex items-center justify-center">
                  🔍
                </span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <div className="flex items-center gap-1 text-white bg-white/10 rounded-full px-2 lg:px-3 py-1.5">
              <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🇵🇰</span>
              </div>
              <span className="text-sm font-medium">PK</span>
            </div>
            <button className="hidden lg:block bg-[#10B981] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#059669] transition-colors">
              Become a seller
            </button>
            <button className="bg-white text-[#8B1538] px-3 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-medium hover:bg-gray-100 transition-colors">
              Login / Sign up
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative px-4 lg:px-6 overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
                Game Deals
                <br />
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#EF4444] bg-clip-text text-transparent">
                  Beyond Borders
                </span>
              </h1>
              <p className="text-white/90 text-base lg:text-lg mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0">
                Fresh deals only 24/7. Miss it? It's gone.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#10B981] rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>ISO Certified Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#10B981] rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Trusted by Millions</span>
                </div>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/30 via-[#8B5CF6]/30 to-[#EF4444]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src="https://assets.g2g.com/ui/img/banners/G2G-550x550-20250509.webp"
                    alt="Gaming Controller"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden mt-6">
            <div className="flex items-center bg-white rounded-full px-4 py-3">
              <input
                type="text"
                placeholder="Search games, items, accounts..."
                className="flex-1 outline-none text-sm"
              />
              <span className="w-5 h-5 text-white bg-[#F97316] rounded-full p-1 ml-2 flex items-center justify-center">
                🔍
              </span>
            </div>
          </div>
        </section>
        {/* Navigation Categories */}
        <section className="px-4 lg:px-6 py-6 lg:py-8">
          <div className=" p-4 lg:p-6 overflow-x-auto">
            <div className="flex items-center justify-between min-w-max lg:min-w-0 gap-4 lg:gap-0">
              {[
                { label: "Gift Cards", symbol: "🎁" },
                { label: "Games", symbol: "🎮" },
                { label: "Software & Apps", symbol: "📱" },
                { label: "Payment Cards", symbol: "💳" },
                { label: "Game coins", symbol: "🪙" },
                { label: "Items", symbol: "🛒" },
                { label: "Accounts", symbol: "👤" },
                { label: "Boosting", symbol: "📈" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-white/80 hover:text-white cursor-pointer transition-colors min-w-[80px]"
                >
                  <span className="text-2xl">{item.symbol}</span>
                  <span className="text-xs lg:text-sm text-center">
                    {item.label}
                  </span>
                </div>
              ))}
              <span className="text-white/60 text-2xl hidden lg:block">→</span>
            </div>
          </div>
        </section>
      </div>

      {/* Trending Game Top Up */}
      <section className="px-4 lg:px-6 py-6 lg:py-8 bg-gradient-to-br from-[#466788] to-[#46738D]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl lg:text-2xl font-bold">
            Trending Game Top Up
          </h2>
          <div className="flex items-center gap-2 text-white/70 cursor-pointer hover:text-white transition-colors">
            <span className="text-sm lg:text-base">Discover all</span>
            <span className="text-sm">→</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-4">
          {[
            {
              name: "Valorant",
              offers: "537 offers",
              bg: "bg-gradient-to-br from-[#EF4444] to-[#DC2626]",
            },
            {
              name: "Mobile Legends: Bang Bang",
              offers: "298 offers",
              bg: "bg-gradient-to-br from-[#F59E0B] to-[#D97706]",
            },
            {
              name: "Brawl Stars",
              offers: "132 offers",
              bg: "bg-gradient-to-br from-[#EF4444] to-[#F59E0B]",
            },
            {
              name: "Teamfight Tactics Mobile",
              offers: "20 offers",
              bg: "bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]",
            },
          ].map((game, index) => (
            <div
              key={index}
              className={`${game.bg} rounded-lg p-4 lg:p-6 aspect-square flex flex-col justify-between relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                {game.offers}
              </div>
              <div className="mt-auto">
                <h3 className="text-white font-bold text-sm lg:text-lg leading-tight">
                  {game.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {[
            {
              name: "Super Sus",
              offers: "52 offers",
              bg: "bg-gradient-to-br from-[#374151] to-[#111827]",
            },
            {
              name: "Clash Of Clans (Global)",
              offers: "130 offers",
              bg: "bg-gradient-to-br from-[#10B981] to-[#F59E0B]",
            },
            {
              name: "Genshin Impact",
              offers: "374 offers",
              bg: "bg-gradient-to-br from-[#60A5FA] to-[#8B5CF6]",
            },
            {
              name: "Marvel Rivals",
              offers: "98 offers",
              bg: "bg-gradient-to-br from-[#10B981] to-[#3B82F6]",
            },
          ].map((game, index) => (
            <div
              key={index}
              className={`${game.bg} rounded-lg p-4 lg:p-6 aspect-square flex flex-col justify-between relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                {game.offers}
              </div>
              <div className="mt-auto">
                <h3 className="text-white font-bold text-sm lg:text-lg leading-tight">
                  {game.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Gift Cards */}
      <section className="px-4 lg:px-6 py-6 lg:py-8 bg-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl lg:text-2xl font-bold">
            Trending Gift Cards
          </h2>
          <div className="flex items-center gap-2 text-white/70 cursor-pointer hover:text-white transition-colors">
            <span className="text-sm lg:text-base">Discover all</span>
            <span className="text-sm">→</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div
              className="flex gap-3 lg:gap-4 pb-4"
              style={{ width: "max-content" }}
            >
              {[
                {
                  name: "PlayStation Network",
                  offers: "1,801 offers",
                  bg: "bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A]",
                  logo: "PS",
                },
                {
                  name: "Xbox",
                  offers: "1,181 offers",
                  bg: "bg-gradient-to-br from-[#10B981] to-[#059669]",
                  logo: "XBOX",
                },
                {
                  name: "Steam Wallet",
                  offers: "1,441 offers",
                  bg: "bg-gradient-to-br from-[#374151] to-[#111827]",
                  logo: "STEAM",
                },
                {
                  name: "Apple",
                  offers: "1,762 offers",
                  bg: "bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]",
                  logo: "iTunes",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className={`${card.bg} rounded-lg p-4 lg:p-6 w-40 h-40 lg:w-48 lg:h-48 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:scale-105 transition-transform flex-shrink-0`}
                >
                  <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {card.offers}
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-white font-bold text-sm lg:text-lg">
                      {card.logo}
                    </h3>
                    <p className="text-white/80 text-xs lg:text-sm">
                      {card.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 bg-[#EF4444] rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Trending Games */}
      <section className="px-4 lg:px-6 py-6 lg:py-8 bg-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl lg:text-2xl font-bold">
            Trending Games
          </h2>
          <div className="flex items-center gap-2 text-white/70 cursor-pointer hover:text-white transition-colors">
            <span className="text-sm lg:text-base">Discover all</span>
            <span className="text-sm">→</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {[
            {
              name: "Valorant",
              offers: "537 offers",
              bg: "bg-gradient-to-br from-[#EF4444] to-[#DC2626]",
            },
            {
              name: "ROBLOX",
              offers: "523 offers",
              bg: "bg-gradient-to-br from-[#111827] to-[#000000]",
            },
            {
              name: "Minecraft",
              offers: "35 offers",
              bg: "bg-gradient-to-br from-[#10B981] to-[#F59E0B]",
            },
            {
              name: "Mobile Legends: Bang Bang",
              offers: "298 offers",
              bg: "bg-gradient-to-br from-[#F59E0B] to-[#D97706]",
            },
          ].map((game, index) => (
            <div
              key={index}
              className={`${game.bg} rounded-lg p-4 lg:p-6 aspect-square flex flex-col justify-between relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                {game.offers}
              </div>
              <div className="mt-auto">
                <h3 className="text-white font-bold text-sm lg:text-lg leading-tight">
                  {game.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-[#EF4444] rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>
      </section>

      {/* Payoneer Banner */}
      <section className="px-4 lg:px-6 py-6 lg:py-8">
        <div className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-lg p-4 lg:p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#F97316] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl lg:text-2xl">🦁</span>
            </div>
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <span className="text-white font-bold text-lg">G2G</span>
                <span className="text-white">×</span>
                <span className="text-white font-bold text-lg">Payoneer</span>
              </div>
              <h3 className="text-white text-lg lg:text-xl font-bold mb-1">
                Earn More. Keep More. Game On!
              </h3>
              <p className="text-white/90 text-sm">
                Get up to $100 in incentive plus a 1% withdrawal fee with
                Payoneer!
              </p>
              <p className="text-white/70 text-xs mt-1">*T&Cs apply</p>
            </div>
          </div>
          <button className="bg-[#F97316] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#EA580C] transition-colors whitespace-nowrap">
            Find Out Now!
          </button>
        </div>
      </section>

      {/* Trending Footer Section */}
      <section className="px-4 lg:px-6 py-6 lg:py-8 bg-black/20 backdrop-blur-sm">
        <h2 className="text-white text-xl lg:text-2xl font-bold mb-6 lg:mb-8 text-center">
          Trending
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Items */}
          <div>
            <h3 className="text-white font-bold mb-4">Items</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
