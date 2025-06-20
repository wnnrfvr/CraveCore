import React from 'react';

const Home = () => {
  return (
    <div className="px-4 sm:px-6 py-16 bg-gradient-to-b from-red-50 to-pink-50 font-sans">
      <div className="space-y-10 text-lg leading-relaxed max-w-4xl mx-auto">
        {/* Main headline section */}
        <div className="relative text-center">
          <div className="absolute -top-5 -left-5 text-red-300 text-6xl opacity-30">“</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 relative z-10 px-6 drop-shadow-md">
            Unleash Your Desires: Passion, Play, and Deeper Connections Start Here.
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-serif italic text-pink-700 relative z-10 px-6">
            CraveCore is not just a dating app; it's an adventure for adventurous souls, featuring electrifying adult games, spicy challenges, and genuine, profound connections.
          </p>
          <div className="absolute -bottom-5 -right-5 text-red-300 text-6xl opacity-30">”</div>
        </div>

        {/* Introduction to the app's core purpose */}
        <div className="space-y-8">
          <div className="p-8 rounded-2xl bg-white bg-opacity-70 backdrop-blur-sm border border-red-100 shadow-lg">
            <p className="text-gray-700 text-base sm:text-lg">
              Tired of superficial swipes? CraveCore dives deeper, offering a vibrant platform where you can discover and cultivate authentic, thrilling relationships. We're here to help you move beyond the ordinary, spark intense chemistry, and forge bonds that truly resonate, all through a uniquely interactive and engaging experience.
            </p>
          </div>

          {/* Section: Games and Challenges */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-red-100 to-pink-100 border border-pink-200 shadow-lg">
            <h2 className="font-bold text-2xl text-red-800 mb-4">Ignite Your Connection: Games & Challenges!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl text-pink-800 mb-2">Dive into Diverse Games:</h3>
                <ul className="list-disc pl-5 text-gray-800 text-base sm:text-lg space-y-1">
                  <li><span className="font-medium text-red-700">Fun & Playful Games:</span> Break the ice, share laughs, and uncover compatibility with engaging and lighthearted activities.</li>
                  <li><span className="font-medium text-red-700">Sensual & Adult Games:</span> Explore intimacy, desires, and fantasies in a safe, private, and consensual space, designed to deepen your connection on a whole new level.</li>
                  <li><span className="font-medium text-red-700">Challenging & Strategic Play:</span> Test your wits, collaborate, and grow together through exciting puzzles and strategic games that reveal your strengths as a couple.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-pink-800 mb-2">Conquer Exciting Challenges:</h3>
                <ul className="list-disc pl-5 text-gray-800 text-base sm:text-lg space-y-1">
                  <li><span className="font-medium text-red-700">Daily Prompts:</span> Get fresh ideas and spark captivating conversations and activities that bring you closer every day.</li>
                  <li><span className="font-medium text-red-700">Relationship Quests:</span> Embark on guided adventures designed to strengthen emotional bonds, explore new experiences, and improve physical intimacy.</li>
                  <li><span className="font-medium text-red-700">Spicy Dares:</span> For the bold and adventurous, discover playful, thrilling, and intimate dares that add an extra spark to your connection.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Social Connection and Content */}
          <div className="p-8 rounded-2xl bg-white border border-pink-100 shadow-lg">
            <h2 className="font-bold text-2xl text-red-800 mb-4">Connect, Share, & Ignite Conversations!</h2>
            <div className="space-y-4 text-gray-800 text-base sm:text-lg">
              <p>
                CraveCore is your dynamic hub for meaningful interaction.
                <span className="font-bold text-red-600"> Chat and connect</span> with individuals who align with your interests and desires, fostering real connections.
              </p>
              <p>
                <span className="font-medium text-red-700">Post and read captivating content</span> on our vibrant social feed, sharing your journey and engaging with a community that understands you.
              </p>
              <p>
                <span className="font-medium text-red-700">Read and post daily confessions</span> – a powerful space for honest expression, shared vulnerability, and finding common ground.
              </p>
              <p>
                Dive into a world of <span className="font-medium text-red-700">spicy content, exhilarating stories, and much more</span>, all curated to keep you and your connections endlessly entertained, intrigued, and deeply occupied.
              </p>
            </div>
          </div>

          {/* Section: Premium Features and Life Enhancement */}
          <div className="p-8 rounded-2xl bg-[#9f0712] text-white shadow-lg">
            <h2 className="font-bold text-2xl text-pink-200 mb-4">Elevate Your Experience with CraveCore Premium</h2>
            <p className="font-medium text-base sm:text-lg leading-relaxed mb-4">
              Our Premium features are meticulously crafted to transcend ordinary connections, offering exclusive insights, tools, and content that truly transform and enrich your life in the most exciting and profound ways:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-pink-100 text-base sm:text-lg">
              <li><span className="font-semibold">Sexual Exploration & Enhancement:</span> Unlock exclusive games, guides, and content designed to deepen sexual intimacy, explore new dimensions of desire, and ignite unparalleled passion.</li>
              <li><span className="font-semibold">Profound Emotional Growth:</span> Access premium insights, expert articles, and advanced challenges to foster deeper emotional understanding, build unbreakable bonds, and navigate relationship dynamics with wisdom.</li>
              <li><span className="font-semibold">Holistic Physical Wellbeing:</span> Discover inspiring activities, challenges, and content aimed at improving physical aspects of your relationships, promoting shared wellness, and enhancing vitality.</li>
              <li><span className="font-semibold">Exclusive Advanced Insights:</span> Gain access to expert-curated content, unique perspectives, and actionable advice that goes beyond the basics, specifically tailored to help couples romantically thrive and reach new heights of connection.</li>
            </ul>
            <p className="font-medium text-base sm:text-lg leading-relaxed mt-4">
              CraveCore is the ultimate destination for adventurous individuals and couples ready to elevate their dating journey, connect authentically, and infuse their relationships with boundless excitement, burning passion, and transformative growth. Are you ready to discover what's next?
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <a
              href='https://play.google.com/store/apps/details?id=com.wnnrfvr.cravecore&hl=en'
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              Get CraveCore Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
