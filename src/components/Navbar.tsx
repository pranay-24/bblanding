import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface NavItem {
  title: string;
  href: string;
  dropdown?: { title: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    
     {
      title: 'Offers',
      href: '#offers',
      dropdown: [
        // { title: 'Furnace Repair', href: 'https://bluebest.com/furnace-service-bountiful-ut/' },
        // { title: 'Furnace Replacement', href: 'https://bluebest.com/furnace-replacement-bountiful-ut/' },
        // { title: 'Furnace Maintenance', href: 'https://bluebest.com/furnace-tune-up-bountiful-ut/' },
        // { title: 'Heat Pumps', href: 'https://bluebest.com/heat-pumps-services/' },
      ]
    },
    
    {
      title: ' Why Trusts Blue Best',
      href: '#why-trust-bluebest',
      dropdown: [
        // { title: 'Furnace Repair', href: 'https://bluebest.com/furnace-service-bountiful-ut/' },
        // { title: 'Furnace Replacement', href: 'https://bluebest.com/furnace-replacement-bountiful-ut/' },
        // { title: 'Furnace Maintenance', href: 'https://bluebest.com/furnace-tune-up-bountiful-ut/' },
        // { title: 'Heat Pumps', href: 'https://bluebest.com/heat-pumps-services/' },
      ]
    },
     
    {
      title: 'Testimonials',
      href: '#testimonials',
      dropdown: [
        // { title: 'AC Repair', href: 'https://bluebest.com/air-conditioner-repair-bountiful-ut/' },
        // { title: 'AC Installation', href: 'https://bluebest.com/air-conditioner-installation-bountiful-ut/' },
        // { title: 'AC Maintainence', href: 'https://bluebest.com/hvac-maintenance-bountiful-ut/' },
        // { title: 'Ductless Mini-Splits', href: 'https://bluebest.com/ductless-mini-splits-bountiful-ut/' },
      ]
    },
    {
      title: 'Request Free Estimate',
      href: '#hero_Section-bblanding',
      dropdown: [
        // { title: 'AC Repair', href: 'https://bluebest.com/air-conditioner-repair-bountiful-ut/' },
        // { title: 'AC Installation', href: 'https://bluebest.com/air-conditioner-installation-bountiful-ut/' },
        // { title: 'AC Maintainence', href: 'https://bluebest.com/hvac-maintenance-bountiful-ut/' },
        // { title: 'Ductless Mini-Splits', href: 'https://bluebest.com/ductless-mini-splits-bountiful-ut/' },
      ]
    },
    // {
    //   title: 'PLUMBING',
    //   href: 'https://bluebest.com/plumbing-bountiful-ut/',
   
    // },
    // {
    //   title: 'PRODUCTS',
    //   href: '#generators',
    //   dropdown: [
    //     // { title: 'Briggs & Stratton Generators', href: 'https://bluebest.com/briggs-stratton-generators-bounitful-ut/' },
    //     // { title: 'Lennox', href: 'https://bluebest.com/lennox-products/' },
    //     // { title: 'Amana', href: 'https://bluebest.com/amana-products/' },
    //     // { title: 'Hague Water Treatment', href: 'https://bluebest.com/hague-water-treatment/' },
    //   ]
    // },
    // {
    //   title: 'SERVICES',
    //   href: 'https://bluebest.com/our-hvac-services-layton-ut/',
    //   dropdown: [
    //     // { title: 'Commercial HVAC', href: 'https://bluebest.com/commercial-hvac/' },
    //     // { title: 'Ductwork', href: 'https://bluebest.com/ductwork-bountiful-ut/' },
    //     // { title: 'HVAC Maintenance Plan', href: 'https://bluebest.com/hvac-maintenance-plan-layton-ut/' },
    //   ]
    // },
    //   {
    //   title: 'CONTACT',
    //   href: 'https://bluebest.com/contact-us/',
   
    // },
  ];

  // Function to handle smooth scrolling with offset
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links (starting with #)
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const navbarHeight = document.querySelector('header')?.offsetHeight ?? 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu after clicking
      setIsOpen(false);
    }
  };

// Add this function after handleSmoothScroll
const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // Handle smooth scrolling for anchor links
  if (href.startsWith('#')) {
    handleSmoothScroll(e, href);
  }
  
  // Always close mobile menu when any link is clicked
  setIsOpen(false);
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Add this useEffect after your existing useEffect
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen) {
      const target = event.target as Element;
      const mobileMenu = document.querySelector('[data-mobile-menu]');
      const menuButton = document.querySelector('[data-menu-button]');
      
      // Close menu if click is outside both the menu and the toggle button
      if (mobileMenu && menuButton && 
          !mobileMenu.contains(target) && 
          !menuButton.contains(target)) {
        setIsOpen(false);
      }
    }
  };

  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isOpen]);


  return (
    <header
      className={`fixed w-full max-w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-light shadow-nav' : 'bg-blue-light shadow-nav'
      }`}
    >
      {/* Mobile Call Bar */}
      <a
        href="tel:+13852002604"
        className="min-[1150px]:hidden block text-center py-2.5 bg-blue-primary-dark text-white text-base font-bold"
      >
        CALL (385) 200-2604
      </a>

      <div className="lg:container px-4 mx-auto">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation — centered, only at 1150px+ */}
          <nav className="hidden min-[1150px]:flex items-center flex-1 justify-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="px-3 py-2 font-bold text-sm xl:text-base text-blue-primary hover:text-orange-primary transition duration-300 flex items-center whitespace-nowrap"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </nav>

          {/* CTA + Mobile/Tablet Menu Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+13852002604"
              className="hidden min-[1150px]:flex items-center px-8 py-3 text-base bg-gradient-to-b from-orange-600 to-orange-500 text-white rounded-full uppercase font-semibold font-['Kanit'] shadow-[0_0.2em_0_#003572] transition duration-300 whitespace-nowrap"
            >
              <Phone size={18} className="mr-2" />
              (385) 200-2604
            </a>

            {/* Hamburger — shows below 1150px */}
            <button
              data-menu-button
              className="min-[1150px]:hidden text-blue-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile Navigation */}
{isOpen && (
  <div data-mobile-menu className="min-[1150px]:hidden mt-4 pb-4">
    <nav className="flex flex-col space-y-4">
      {navItems.map((item) => (
        <div key={item.title}>
          
           <a href={item.href}
            onClick={(e) => handleMobileLinkClick(e, item.href)} // Use new handler
            className="font-medium text-base text-blue-primary hover:text-blue-dark py-2 block"
          >
            {item.title}
          </a>
        </div>
      ))}
      
        <a href="tel:+13852002604"
        onClick={() => setIsOpen(false)} // Close menu when phone link clicked
        className="flex items-center justify-center px-4 py-3 mt-2 rounded-full bg-blue-primary text-white font-medium hover:bg-blue-dark transition duration-300"
      >
        <Phone size={18} className="mr-2" />
        (385) 200-2604
      </a>
    </nav>
  </div>
)}
      </div>
    </header>
  );
};

export default Navbar;