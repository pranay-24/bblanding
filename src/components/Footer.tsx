import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-primary text-white pt-12 pb-6">
      <div className="lg:container mx-auto px-4">
        <div className="bg-white p-4 rounded-lg inline-block mb-4">
              <Logo />
            </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Contact */}
          <div className="col-span-1">
            
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>600 N 500 W Suite D<br />Bountiful, UT 84010</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+13852741575" className="hover:text-orange-primary transition duration-300">(385) 274-1575</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@bluebest.com" className="hover:text-orange-primary transition duration-300">info@bluebest.com</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="https://bluebest.com/furnace-company-bountiful-ut/" className="hover:text-orange-primary transition duration-300">Heating</a></li>
              <li><a href="https://bluebest.com/ac-company-bountiful-ut/" className="hover:text-orange-primary transition duration-300">Cooling</a></li>
              <li><a href="https://bluebest.com/plumbing-bountiful-ut/" className="hover:text-orange-primary transition duration-300">Plumbing</a></li>
              <li><a href="https://bluebest.com/air-quality-bountiful-ut/" className="hover:text-orange-primary transition duration-300">Air Quality</a></li>
              <li><a href="https://bluebest.com/briggs-stratton-generators-bounitful-ut/" className="hover:text-orange-primary transition duration-300">Generators</a></li>
              <li><a href="https://bluebest.com/hvac-maintenance-plan-layton-ut/" className="hover:text-orange-primary transition duration-300">Maintenance Plans</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="https://bluebest.com/about-us/" className="hover:text-orange-primary transition duration-300">About Us</a></li>
              <li><a href="https://bluebest.com/reviews/" className="hover:text-orange-primary transition duration-300">Testimonials</a></li>
              <li><a href="https://bluebest.com/financing/" className="hover:text-orange-primary transition duration-300">Financing</a></li>
              <li><a href="https://bluebest.com/apply-jobs/" className="hover:text-orange-primary transition duration-300">Careers</a></li>
              <li><a href="https://bluebest.com/blog/" className="hover:text-orange-primary transition duration-300">Blog</a></li>
              <li><a href="https://bluebest.com/contact-us/" className="hover:text-orange-primary transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Hours and Social */}
          <div className="col-span-1">
            {/* <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <ul className="space-y-1 mb-6">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>By Appointment</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
              <li className="mt-2 text-orange-primary font-medium">24/7 Emergency Service Available</li>
            </ul> */}
            
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-primary transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-orange-primary transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-orange-primary transition duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-orange-primary transition duration-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-blue-dark/30 my-6" />
        
        <div className="text-center text-sm text-blue-100/80">
          <p>&copy; {new Date().getFullYear()} BlueBest Plumbing, Heating, Air, Generators. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#privacy" className="hover:text-orange-primary transition duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-orange-primary transition duration-300">Terms of Service</a>
            <a href="#accessibility" className="hover:text-orange-primary transition duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;