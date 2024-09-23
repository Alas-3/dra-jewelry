'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Menu, X, MessageCircle } from 'lucide-react';
import { bannerData, specialtiesData, customDesignData } from '../pages/data';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    (<div className="min-h-screen bg-white text-black">
      <motion.header
        style={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button className="lg:hidden z-50" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <h1 className="text-2xl font-serif tracking-wider">DRA Jewelry</h1>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-white z-40 flex items-center justify-center lg:hidden">
                <ul className="text-center space-y-8">
                  <li><a
                    href="#collections"
                    className="text-3xl font-serif hover:text-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}>Collections</a></li>
                  <li><a
                    href="#custom-design"
                    className="text-3xl font-serif hover:text-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}>Custom Design</a></li>
                  <li><a
                    href="#about"
                    className="text-3xl font-serif hover:text-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}>About Us</a></li>
                  <li><a
                    href="#contact"
                    className="text-3xl font-serif hover:text-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              <li><a href="#collections" className="hover:text-gold transition-colors">Collections</a></li>
              <li><a href="#custom-design" className="hover:text-gold transition-colors">Custom Design</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </motion.header>
      <main>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={bannerData.image} 
          alt="Luxury Jewelry"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="relative z-10 text-center text-black">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl font-serif mb-4"
        >
          {bannerData.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-xl md:text-2xl mb-8"
        >
          {bannerData.description} 
        </motion.p>
        <motion.a
          href="#collections"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="bg-gold text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gold-dark transition-colors inline-block"
        >
          Explore Collections
        </motion.a>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-black" />
      </motion.div>
    </section>

        <section id="collections" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Artisan's Specialties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialtiesData.map((specialty, index) => (
                <div key={specialty.name} className="group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={specialty.image}
                      alt={specialty.name}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xl font-serif">Explore {specialty.name}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif mt-4 mb-2">{specialty.name}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

    <section id="custom-design" className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 ml-4"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">{customDesignData.title}</h2>
            <p className="text-lg mb-6">{customDesignData.description}</p>
            <a
              href="#contact"
              className="bg-white text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gold-dark transition-colors inline-block"
            >
              Start Your Journey
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-8 lg:mb-0 pr-4"
          >
            <img
              src={customDesignData.image} 
              alt={customDesignData.title}
              className="w-full h-auto rounded-lg shadow-lg mt-8 ml-2 lg:mt-0 lg:ml-0"
            />
          </motion.div>
        </div>
      </div>
    </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Emily S.', text: 'The attention to detail in my custom-designed necklace is simply breathtaking. It\'s a true work of art.' },
                { name: 'Michael R.', text: 'From concept to creation, the team at Luxe Jewels exceeded all my expectations. My fiancée adores her engagement ring!' },
                { name: 'Sophia L.', text: 'The craftsmanship is unparalleled. Each piece I\'ve purchased feels like it was made just for me.' }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-lg mb-4">"{testimonial.text}"</p>
                  <p className="font-serif text-gold">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-r from-gold to-gold-dark text-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0 mr-8"> {/* Margin added here */}
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Experience Luxury</h2>
                <p className="text-xl mb-8">Embark on a journey of unparalleled craftsmanship and elegance. Our expert artisans are ready to bring your vision to life.</p>
                <ul className="text-lg space-y-4">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Personalized Consultation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Custom Design Process
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Exquisite Craftsmanship
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-serif mb-6 text-black">Request a Consultation</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" />
                  <textarea
                    placeholder="Tell us about your dream piece"
                    rows="4"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold resize-none"></textarea>
                  <button
                    type="submit"
                    className="w-full bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
      <footer id="about" className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-serif mb-4">About Luxe Jewels</h3>
              <p className="text-sm">Crafting exquisite, custom-made jewelry for those who appreciate the finest things in life.</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-serif mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#collections" className="hover:text-gold transition-colors">Collections</a></li>
                <li><a href="#custom-design" className="hover:text-gold transition-colors">Custom Design</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-serif mb-4">Customer Care</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Care Instructions</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-serif mb-4">Connect With Us</h3>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="#" className="text-white hover:text-gold transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gold transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gold transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Luxe Jewels. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Facebook Messenger Icon */}
      <a
        href="https://m.me/businessname"
        className="fixed bottom-4 right-4 z-50 bg-black rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Contact us on Facebook Messenger">
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>)
  );
}