import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import kulipaLogo from "../assets/kulipal.jpeg";
import madeForEaseLogo from "../assets/newLogo.jpeg";

const Home = () => {
  const images = [
    {
      url: "https://dailypost.ng/wp-content/uploads/2023/11/Afro-Nation.jpg",
      caption: "Event Ticket",
    },
    {
      url: "https://media-cdn.tripadvisor.com/media/photo-o/16/f0/4a/57/hotel-exterior.jpg",
      caption: "Hotel Bookings",
    },
    {
      url: "https://krentdevstorage.blob.core.windows.net/krentfiles/property-6756c1b43c9de9001181cfe4-1733738990280-cover.jpeg",
      caption: "Shortlet Apartment Bookings",
    },
    {
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHZ9msTBJM9zJ3t7BdjUEN2kUTPiSH3qxfP8XGqVd82Um5nBhDuOFuBAovAmc2KRkroq_rsMD4ltlKxk-S51UBXLDGIjeZwrnfrC0lfqtFr1WVSy8VVwtKwzDZr_WRfY8Z2l5wqReFBStpGrS-eH9hrXCDWcC3eu3Zgyq6y70SX9MxxqsksLohOGk0/s2048/jollof%20rice%20sisi%20yemmie.jpg",
      caption: "Order Delicious Food",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImage].url})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between py-10 px-6 text-center">
        {/* Header Logo */}
        <img
          src={madeForEaseLogo}
          alt="MadeForEase"
          className="w-16 h-16 rounded-lg object-cover"
        />

        {/* Main Content */}
        <div className="flex flex-col items-center gap-6">
          {/* Kulipa Logo */}
          <img
            src={kulipaLogo}
            alt="Kulipa"
            className="w-32 h-20 rounded-lg object-cover"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-white max-w-3xl leading-relaxed"
          >
            Enjoy <span className="text-yellow-400 font-bold">25% off</span>{" "}
            with <span className="text-blue-400 font-medium">Kulipal</span> when
            you use our link for bookings.
          </motion.p>

          {/* Current Image Caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl text-yellow-400 font-bold uppercase tracking-wider"
          >
            {images[currentImage].caption}
          </motion.div>

          {/* Call to Action Button */}
          <Link to="/shopping-guide">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-500 flex items-center gap-2 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </motion.button>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-white text-sm">
          <p>
            Powered by{" "}
            <span className="font-bold text-yellow-400">MadeForEase</span> &{" "}
            <span className="font-bold text-blue-400">Kulipa Business</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
