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
      title: 'HEATING',
      href: 'https://bluebest.com/furnace-company-bountiful-ut/',
      dropdown: [
        { title: 'FURNACE REPAIR', href: 'https://bluebest.com/furnace-service-bountiful-ut/' },
        { title: 'FURNACE REPLACEMENT', href: 'https://bluebest.com/furnace-replacement-bountiful-ut/' },
        { title: 'FURNACE MAINTENANCE', href: 'https://bluebest.com/furnace-tune-up-bountiful-ut/' },
        { title: 'HEAT PUMPS', href: 'https://bluebest.com/heat-pumps-services/' },
      ]
    },
    {
      title: 'AIR CONDITIONING',
      href: 'https://bluebest.com/ac-company-bountiful-ut/',
      dropdown: [
        { title: 'AC REPAIR', href: 'https://bluebest.com/air-conditioner-repair-bountiful-ut/' },
        { title: 'AC INSTALLATION', href: 'https://bluebest.com/air-conditioner-installation-bountiful-ut/' },
        { title: 'AC MAINTENANCE', href: 'https://bluebest.com/hvac-maintenance-bountiful-ut/' },
        { title: 'DUCTLESS MINI-SPLITS', href: 'https://bluebest.com/ductless-mini-splits-bountiful-ut/' },
      ]
    },
    {
      title: 'PLUMBING',
      href: 'https://bluebest.com/plumbing-bountiful-ut/',
   
    },
    {
      title: 'PRODUCTS',
      href: '#generators',
      dropdown: [
        { title: 'BRIGGS & STRATTON', href: 'https://bluebest.com/briggs-stratton-generators-bounitful-ut/' },
        { title: 'LENNOX', href: 'https://bluebest.com/lennox-products/' },
        { title: 'AMANA', href: 'https://bluebest.com/amana-products/' },
        { title: 'HAGUE WATER TREATMENT', href: 'https://bluebest.com/hague-water-treatment/' },
      ]
    },
    {
      title: 'SERVICES',
      href: '#services',
      dropdown: [
        { title: 'Maintenance Plans', href: '#maintenance-plans' },
        { title: 'Commercial Services', href: '#commercial' },
        { title: 'Financing', href: '#financing' },
      ]
    },
  ];

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
        isScrolled ? 'bg-white shadow-nav' : 'bg-white shadow-nav'
      }`}
    >
      <div className="container px-4 mx-auto ">
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
                href="tel:+13852741575"
                className="hidden md:flex items-center px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300"
              >
                <Phone size={18} className="mr-2" />
                (385) 274-1575
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
                  className="px-4 py-2 font-medium text-blue-primary hover:text-blue-dark transition duration-300 flex items-center"
                >
                  {item.title}
                  {item.dropdown && <ChevronDown size={16} className="ml-1" />}
                </a>
                {item.dropdown && activeDropdown === item.title && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                    {item.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.title}
                        href={dropItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-light hover:text-blue-primary transition duration-300"
                      >
                        {dropItem.title}
                      </a>
                    ))}
                  </div>
                )}
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
                    className="font-medium text-blue-primary hover:text-blue-dark py-2 block"
                  >
                    {item.title}
                  </a>
                  {item.dropdown && (
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
                  )}
                </div>
              ))}
              <a
                href="tel:+13852741575"
                className="flex items-center justify-center px-4 py-3 mt-2 rounded-full bg-blue-primary text-white font-medium hover:bg-blue-dark transition duration-300"
              >
                <Phone size={18} className="mr-2" />
                (385) 274-1575
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;