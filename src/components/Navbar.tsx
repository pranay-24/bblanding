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
        const navbarHeight = 120; // Adjust this value based on your navbar height
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


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-light shadow-nav' : 'bg-blue-light shadow-nav'
      }`}
    >
      <div className="lg:container px-4 mx-auto ">
        <div className="flex flex-col">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-4">
            <Logo />
            
            {/* Phone Number Button */}
            <div className="flex items-center gap-4">
              {/* <a
                href="#specials"
                className="hidden md:inline-block px-4 py-2 text-orange-primary font-medium hover:text-orange-dark transition duration-300"
              >
                Special Offers
              </a> */}
              <a
                href="tel:+13852002604"
                className="hidden md:flex items-center px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300"
              >
                <Phone size={18} className="mr-2" />
                (385) 200-2604
                
              </a>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-blue-primary"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="hidden md:flex justify-center  border-t border-gray-100">
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
                  className="px-4 py-2 font-bold text-base xl:text-lg text-blue-primary hover:text-orange-primary transition duration-300 flex items-center"
                >
                  {item.title}
                  {/* {item.dropdown && <ChevronDown size={16} className="ml-1" />} */}
                </a>
                {/* {item.dropdown && activeDropdown === item.title && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                    {item.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.title}
                        href={dropItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-light hover:text-orange-primary transition duration-300"
                      >
                        {dropItem.title}
                      </a>
                    ))}
                  </div>
                )} */}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.title}>
                  <a
                    href={item.href}
                    className="font-medium text-base text-blue-primary hover:text-blue-dark py-2 block"
                  >
                    {item.title}
                  </a>
                  {/* {item.dropdown && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.title}
                          href={dropItem.href}
                          className="block text-gray-700 hover:text-blue-primary py-1"
                        >
                          {dropItem.title}
                        </a>
                      ))}
                    </div>
                  )} */}
                </div>
              ))}
              <a
                href="tel:+13852002604"
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