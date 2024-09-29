import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-4xl mx-auto">
          <div className="text-center sm:text-left col-span-1 sm:col-span-2 md:col-span-1 md:pr-8">
            <h3 className="text-xl font-serif mb-4">About DRA Jewelery</h3>
            <p className="text-sm">Crafting exquisite, custom-made jewelry for those who appreciate the finest things in life. Our passion for perfection shines through in every piece we create.</p>
          </div>
          <div className="text-center sm:text-left col-span-1 sm:col-span-2 md:col-span-1 md:px-8 md:border-x md:border-gray-700">
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><a href="#custom-design" className="hover:text-gold transition-colors">Custom Design</a></li>
              <li><Link href="/aboutus" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="text-center col-span-2 md:col-span-1 md:pl-8">
            <h3 className="text-xl font-serif mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} DRA Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;