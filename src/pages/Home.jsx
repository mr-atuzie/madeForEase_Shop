import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
import kulipaLogo from "../assets/kulipal.jpeg";
import { motion, AnimatePresence } from "framer-motion";
// import { IoMdCart, IoMdClose } from "react-icons/io5";
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
    {
      url: "https://atqnews.com/wp-content/uploads/2023/11/Afro-nation.jpg",
      caption: "Event Ticket",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79476196.jpg?k=16f1b387011e6016ffa88f748d8f147b0b0f2381b13591add470f1c9574d6795&o=&hp=1",
      caption: "Hotel Bookings",
    },
    {
      url: "https://nairametrics.com/wp-content/uploads/2022/12/Shortlet-1.webp",
      caption: "Shortlet Apartment Bookings",
    },
    {
      url: "https://img.freepik.com/premium-photo/nigerian-food-platter-delight_1009424-232.jpg",
      caption: "Order Delicious Food",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [popup, setPopUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    window.open("https://kulipal.com", "_blank");
  };

  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${images[currentImage].url})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>

        <img
          src={madeForEaseLogo}
          alt="MadeForEase"
          className="absolute top-6 left-6 w-10 h-10 lg:w-20 lg:h-20 rounded-lg object-cover z-20"
        />

        {/* Content */}
        <AnimatePresence>
          {popup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-black/70 flex justify-center items-center z-50"
            >
              <motion.form
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white p-4 lg:p-8 rounded-lg shadow-lg w-11/12 max-w-md"
                onSubmit={handleRegistration}
              >
                <div className=" w-full flex justify-betwee items-center mb-3">
                  <img
                    src={madeForEaseLogo}
                    alt="MadeForEase"
                    className="w-10 h-10 lg:w-16 lg:h-16 rounded-lg object-cover"
                  />

                  <button
                    onClick={() => setPopUp(false)}
                    className=" p-2 text-red-500 text-right"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <p className=" text-center text-gray-500 w-[75%] mb-5 text-sm">
                  Enjoy 25% off with{" "}
                  <span className="text-blue-500 font-medium">Kulipal</span>{" "}
                  when you use our link for bookings.
                </p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full p-3 mb-4 bg-blue-50 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full p-3 mb-6 border rounded bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center text-sm gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition"
                >
                  Visit Store
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>

                <div className="text-center mt-16 text-xs lg:text-base">
                  <p>
                    Powered by <br />
                    <span className="font-bold uppercase text-yellow-500">
                      Made For Ease
                    </span>
                    &{" "}
                    <span className="font-bold uppercase text-blue-500">
                      Kulipa Business
                    </span>
                  </p>
                </div>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center gap-6 lg:gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={kulipaLogo}
              alt="Kulipa"
              className="w-28 h-16 lg:w-32 lg:h-20 rounded-lg object-cover"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm lg:text-lg text-white max-w-3xl leading-relaxed"
          >
            Enjoy 25% off with{" "}
            <span className="text-blue-500 font-medium">Kulipal</span> when you
            use our link for bookings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl lg:text-5xl text-yellow-500 font-extrabold uppercase tracking-wider"
          >
            {images[currentImage].caption}
          </motion.div>

          {/* Call to Action */}
          <motion.button
            onClick={() => setPopUp(!popup)}
            className="bg-blue-600 hover:bg-blue-400 flex gap-2 text-white font-semibold py-3 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {/* <IoMdCart size={15} /> */}
          </motion.button>

          {/* Footer */}
          <div className="text-center mt-16 text-xs lg:text-base text-white">
            <p>
              Powered by <br />
              <span className="font-bold uppercase text-yellow-500">
                MadeForEase
              </span>{" "}
              &{" "}
              <span className="font-bold uppercase text-blue-500">
                Kulipa Business
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
