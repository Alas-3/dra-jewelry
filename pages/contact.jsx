import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import ConsultationForm from "../components/requestConsultation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

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
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
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

      <main className="pt-20">
        <section className="py-10 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center text-black">
              Contact Us
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="h-px bg-gold w-12 md:w-16 mb-4 md:mb-0 md:mr-4"></div>
              <p className="text-lg md:text-2xl font-serif text-center text-black">
                Experience Unparalleled Luxury
              </p>
              <div className="h-px bg-gold w-12 md:w-16 mt-4 md:mt-0 md:ml-4"></div>
            </div>
          </div>
          {/* Black line below the section */}
          <div className="h-px bg-black mt-10 mx-auto w-4/5"></div>
        </section>

        <section className="py-8 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-3xl font-serif mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-gold mr-4 flex-shrink-0" />
                    <p className="text-sm md:text-base">
                      Ground Floor, EMCCO Building, McArthur Hiway, Meycauayan
                      City 3020
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-gold mr-4" />
                    <p>0977 453 0798</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-gold mr-4" />
                    <p>araniegopao12@gmail.com</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-gold mr-4" />
                    <p>
                      Mon - Sat: 10AM - 8PM
                      <br />
                      Sun: 12PM - 6PM
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-4">Follow Us</h4>
                  <div className="flex space-x-4 mb-5">
                    <a
                      href="https://www.facebook.com/DraJewelryShop29/"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-serif mb-6">Visit Our Shop</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.16037655689044!2d120.96108664098905!3d14.737110685522326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b3b4c4c0663d%3A0x3716c0bc661313d3!2sDra%20Jewelry!5e0!3m2!1sen!2sph!4v1727579819109!5m2!1sen!2sph"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <ConsultationForm />
          </div>
        </section>
      </main>

      <Footer />

      <a
        href="https://m.me/DraJewelryShop29"
        className="fixed bottom-4 right-4 z-50 bg-black rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Contact us on Facebook Messenger"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
