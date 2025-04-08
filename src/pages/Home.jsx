import React from 'react'

const Home = () => {
  return (
    <div className="px-6 py-16 bg-gradient-to-b from-red-50 to-pink-50">
      <div className="space-y-10 text-lg leading-relaxed max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -top-5 -left-5 text-red-300 text-6xl opacity-30">“</div>
          <p className="text-3xl md:text-4xl font-serif italic font-medium text-red-800 relative z-10 px-6">
            Relationships are the heartbeat of human experience, but too often, they lose their spark. 
            Our app is here to change that—a digital cupid designed to reignite passion and deepen 
            intimacy for couples everywhere.
          </p>
          <div className="absolute -bottom-5 -right-5 text-red-300 text-6xl opacity-30">”</div>
        </div>

        <div className="space-y-8">
          <div className="p-8 rounded-2xl bg-white bg-opacity-70 backdrop-blur-sm border border-red-100 shadow-lg">
            <p className="text-gray-700">
              In today's fast-paced world, couples often struggle to keep the excitement alive. 
              Routine and stress can dim the flame of love, creating emotional distance between partners. 
              Our app tackles this head-on by offering a fresh, engaging way for couples to reconnect.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-red-100 to-pink-100 border border-pink-200 shadow-lg">
            <p className="text-gray-800">
              Through <span className="font-medium text-red-700">playful challenges</span>, <span className="font-medium text-red-700">intimate conversations</span>, and <span className="font-medium text-red-700">expert-curated tips</span>, 
              it helps partners rediscover their sexual, emotional, and playful desires—transforming 
              fading relationships into vibrant, thrilling partnerships.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-pink-100 shadow-lg">
            <p className="text-gray-800">
              What sets our app apart is its focus on <span className="font-bold text-red-600">fun and passion</span>. Features like daily seduction prompts, 
              spicy games, and a daily challenge for flirtatious exchanges make strengthening a relationship 
              feel like an adventure, not a chore.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#9f0712] text-white shadow-lg">
            <p className="font-medium">
              It's built for couples of all ages and stages—whether they're newly together or celebrating 
              decades of love—anyone looking to spice things up and deepen their bond will find value here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home