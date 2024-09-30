import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { Menu, X, MessageCircle, MessageCircleMore, Palette, Hammer } from "lucide-react";
import CheckMark from "../components/CheckMark"; // Update the path to your Lottie component
import Footer from "@/components/footer";

const galleryItems = [
  {
    id: 1,
    src: "../images/ring-dra.png?height=400&width=600",
    alt: "Custom Ring Design",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Bespoke Necklace",
  },
  {
    id: 3,
    src: "../images/earrings-dra.png?height=400&width=600",
    alt: "Unique Earrings",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Personalized Bracelet",
  },
  {
    id: 5,
    src: "../images/pendant3-dra.png?height=400&width=600",
    alt: "Exclusive Pendant",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Custom Cufflinks",
  },
];

const GalleryPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY); // Use the environment variable

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitted(true); // Change to success state
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling on the body when the menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the menu is closed
      document.body.style.overflow = "";
    }

    // Clean up overflow style on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white text-black">
      <motion.header
        style={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-99 backdrop-blur-md shadow-md"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button className="lg:hidden z-50" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <h1 className="text-xl sm:text-xs md:text-2xl lg:text-2xl font-serif tracking-wider">
            DRA Jewelry
          </h1>

          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-gold transition-colors"
                >
                  Custom Design
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="hover:text-gold transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center"
          >
            <ul className="text-center space-y-8">
              <li>
                <Link
                  href="/"
                  className="text-2xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Still closing the menu on click
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-2xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom Design
                </a>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="text-2xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Still closing the menu on click
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-2xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="pt-20 bg-gray-50">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-4"
            >
              Our Gallery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-center text-gray-600 mb-8"
            >
              A showcase of our finest custom-made jewelry masterpieces
            </motion.p>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xl font-serif">
                        {item.alt}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            {/* First Section */}
            <h2 className="text-3xl md:text-4xl font-serif mb-8">
              The Art of Custom Design
            </h2>
            <p className="text-lg mb-12 max-w-3xl mx-auto">
              Each piece in our gallery represents a unique journey of
              creativity and craftsmanship. From initial concept to final
              creation, we work closely with our clients to bring their visions
              to life, resulting in truly one-of-a-kind jewelry pieces.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              Start Your Custom Design
            </button>
          </div>
        </section>

        {/* Modal for Request Consultation */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-sm mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-serif mb-6 text-black">
                      Book an Appointment
                    </h3>
                    <form onSubmit={onSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="Name of Client"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                      <input
                        type="email"
                        name="Email of Client"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                      <textarea
                        name="Message"
                        placeholder="Tell us about your dream piece"
                        rows={4}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                      >
                        Book Appointment
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="mt-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckMark /> {/* Use the Lottie check mark here */}
                    </motion.div>
                    <h3 className="text-2xl font-serif mb-4 text-black">
                      Email Sent
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your interest. We'll be in touch with you
                      shortly to discuss your dream piece.
                    </p>
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                        setIsSubmitted(false); // Reset to show form next time
                      }}
                      className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Our Design Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircleMore className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-serif mb-2">Consultation</h3>
                <p className="text-gray-600">
                  Discuss your vision and preferences with our expert designers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-xl font-serif mb-2">Concept Creation</h3>
                <p className="text-gray-600">
                  We create detailed sketches and 3D renderings of your unique
                  piece.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-xl font-serif mb-2">Craftsmanship</h3>
                <p className="text-gray-600">
                  Our master artisans bring your design to life with meticulous
                  attention to detail.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Facebook Messenger Icon */}
      <a
        href="#"
        className="fixed bottom-4 right-4 z-50 bg-black rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Contact us on Facebook Messenger"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default GalleryPage;
