import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MdHome, 
  MdDashboard, 
  MdInventory, 
  MdAnalytics, 
  MdIntegrationInstructions,
  MdSupportAgent,
  MdMenu,
  MdClose,
  MdSearch,
  MdNotifications,
  MdSettings,
  MdLogout,
  MdPerson
} from 'react-icons/md';
import { IoDocumentTextOutline } from 'react-icons/io5';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', icon: <MdHome />, label: 'Home' },
    { path: '/dashboard', icon: <MdDashboard />, label: 'Dashboard' },
    { path: '/inventory', icon: <MdInventory />, label: 'Inventory' },
    { path: '/reports', icon: <IoDocumentTextOutline />, label: 'Reports' },
    { path: '/analytics', icon: <MdAnalytics />, label: 'Analytics' },
    { path: '/integrations', icon: <MdIntegrationInstructions />, label: 'Integrations' },
    { path: '/support', icon: <MdSupportAgent />, label: 'Support' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-base-100/95 backdrop-blur shadow-md' : 'bg-base-100'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Track Nest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 hover:text-primary transition-colors
                  ${location.pathname === link.path ? 'text-primary' : 'text-base-content'}`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button className="btn btn-ghost btn-circle">
              <MdSearch className="h-5 w-5" />
            </button>

            {/* User Menu */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-primary/10">
                  <MdPerson className="w-6 h-6 m-2" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li><a><MdPerson className="h-5 w-5" /> Profile</a></li>
                <li><a><MdSettings className="h-5 w-5" /> Settings</a></li>
                <li><a><MdNotifications className="h-5 w-5" /> Notifications</a></li>
                <li><a><MdLogout className="h-5 w-5" /> Logout</a></li>
              </ul>
            </div>

            <button className="btn btn-primary">Try Premium</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden btn btn-ghost btn-circle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden bg-base-100`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-base-200
                ${location.pathname === link.path ? 'text-primary bg-base-200' : 'text-base-content'}`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
          <button className="w-full btn btn-primary mt-4">Try Premium</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 