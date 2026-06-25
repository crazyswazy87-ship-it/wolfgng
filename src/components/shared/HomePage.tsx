import { motion } from "framer-motion";
import YouTubePlayer from "./YoutubePlayer";
import Carousel from "./Carousel";
import { FaTwitter, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import ScrollVelocity from "../ScrollVelocity";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const sections = [
  {
    title: "Your Personal Modern Home",
    desc: "Own a futuristic cabin built for comfort, peace, and modern living.",
    topics: [
      "Smart Living",
      "Modern Interiors",
      "Affordable Luxury",
      "Fast Installation",
      "Eco Friendly",
    ],
  },
  {
    title: "Luxury Stays for African Travelers",
    desc: "A new way to stay and explore Africa with stylish capsule cabins designed for unforgettable experiences.",
    topics: [
      "Airbnb Ready",
      "Eco Resorts",
      "Scenic Views",
      "Premium Experience",
      "Smart Comfort",
    ],
  },
  {
    title: "Smart Investment Opportunities",
    desc: "Purchase futuristic cabins and generate income through tourism and hospitality stays.",
    topics: [
      "Passive Income",
      "Fast ROI",
      "Tourism Business",
      "Rental Income",
      "Mortgage Opportunities",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/*Scroll Vellocity*/}
      <ScrollVelocity
        texts={['Boyz In The Hood', 'Boyz In Te Hood ']} 
        velocity={50}
        className="custom-scroll-text adii"
        numCopies={4}
        damping={70}
        stiffness={750}
      />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-zinc-900 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold max-w-5xl leading-tight "
        >
          <span className="worrry">
          Future Living Across Africa
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-zinc-400 mt-6 max-w-2xl text-lg"
        >
          <span className="mokoro">
          Stylish futuristic cabins designed for living, travel, and smart
          investment
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 mt-10 flex-wrap justify-center dizel"
        >
          <button className="gin">
            Explore Homes
          </button>

          <button className="gin">
            Invest Today
          </button>
        </motion.div>
      </section>

      <YouTubePlayer
        url="https://youtu.be/b65u7dN68pQ?si=4fPlq-SE6XOGCriY"
        autoplay={false}
      />

      {/* ABOUT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 text-center max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 ndege">About Volferda</h2>

        <p className="text-zinc-400 text-lg leading-relaxed mokoro">
          Volferda introduces a new generation of modern capsule homes across
          Africa — affordable, elegant, portable, and built for the future.
        </p>
      </motion.section>

      {/* CARDS */}
      <section className="py-24 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
            >
              <h3 className="text-2xl font-bold mb-4 worrry">{item.title}</h3>

              <p className="text-zinc-400 mb-6 mokoro">{item.desc}</p>

              <div className="flex flex-wrap gap-3">
                {item.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="bg-blue-600/20 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Carousel />

      {/* FEATURES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 bg-zinc-950"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 worry">
            Built for the Future
          </h2>
        </div>

      <div className="wawili">
        
        <div className="quen">
        <a
          href="#"
          className="text-white text-2xl hover:scale-110 transition-all duration-300"
        >
          <FaTwitter />
        </a>
        </div>

        <div className="quen">
        <a
          href="#"
          className="text-white text-2xl hover:scale-110 transition-all duration-300"
        >
          <FaInstagram />
        </a>
        </div>

        <div className="quen">
        <a
          href="#"
          className="text-white text-2xl hover:scale-110 transition-all duration-300"
        >
          <FaWhatsapp />
        </a>
        </div>

        <div className="quen">
        <a
          href="#"
          className="text-white text-2xl hover:scale-110 transition-all duration-300"
        >
          <FaTiktok />
        </a>
        </div>

      </div>

      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-32 px-6 text-center bg-gradient-to-t from-blue-950 to-black"
      >
        <h2 className="text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Own the Future of Modern Living
        </h2>

        <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto">
          Live in it, travel with it, or turn it into an income-generating
          investment.
        </p>

        <div className="flex justify-center mt-10 flex-wrap dizel">
          <button className="gin">
            Explore Homes
          </button>

          <button className="gin">
            See Pricing
          </button>
        </div>
      </motion.section>
    </div>
  );
}