import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import kulipaLogo from "../assets/kulipal.jpeg";
import madeForEaseLogo from "../assets/MFE logo.png";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

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

  const handleVisitStore = () => {
    // Open in new tab
    window.open("https://kulipal.com/", "_blank");
    // Alternatively, to open in same tab:
    // window.location.href = "https://kulipal.com/";
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImage].url})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between py-5 lg:py-10 px-6 text-center">
        {/* Header Logo */}

        <div className="flex justify-between items-center">
          <img
            src={madeForEaseLogo}
            alt="MadeForEase"
            className="w-10 lg:w-16 lg:h-16 h-10 object-cover"
          />

          <Link to="/discount-form">
            {" "}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              Get Discount
            </motion.button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-4 lg:gap-6">
          <img
            src={kulipaLogo}
            alt="Kulipa"
            className="w-36 h-16  rounded-xl object-cover shadow-xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white max-w-2xl leading-relaxed"
          >
            Enjoy <span className="text-yellow-400 font-bold">25% off</span>{" "}
            with <span className="text-blue-400 font-semibold">Kulipal</span>{" "}
            when you use our link for bookings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-5xl text-yellow-400 font-extrabold uppercase tracking-wide drop-shadow-md"
          >
            {images[currentImage].caption}
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex items-center mt-4">
            <motion.button
              onClick={handleVisitStore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 w-[180px] hover:bg-yellow-400 text-white font-semibold py-3 flex items-center gap-2 px-6 rounded-2xl shadow-lg transition duration-300"
            >
              <FiShoppingBag className="text-lg" />
              <span className="font-medium text-sm lg:text-base">
                Visit Store
              </span>
            </motion.button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-white text-sm mt-8">
          <p>
            Powered by{" "}
            <span className="font-bold text-yellow-400">MadeForEase</span> &{" "}
            <span className="font-bold text-blue-400">Kulipal Business</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
