import { Link } from 'react-router-dom';
import { MdHome, MdSupport, MdSearch } from 'react-icons/md';

function NotFound() {
  return (
    <div className="min-h-screen p-5  flex items-center justify-center bg-base-200">
      <div className="max-w-2xl  space-y-4 text-center">
        {/* Robot Illustration */}
        <div className="relative">
          <div className="w-48 h-48 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Shelving Unit */}
              <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2"/>
              <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="2"/>
              <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="2"/>
              
              {/* Missing Box Animation */}
              <g className="animate-pulse">
                <rect x="30" y="25" width="15" height="10" fill="currentColor" opacity="0.3"/>
                <rect x="55" y="25" width="15" height="10" fill="currentColor"/>
                <rect x="30" y="45" width="15" height="10" fill="currentColor"/>
                <rect x="55" y="45" width="15" height="10" fill="currentColor"/>
                {/* Missing box spot */}
                <rect x="30" y="65" width="15" height="10" fill="currentColor"/>
                <rect x="55" y="65" width="15" height="10" fill="currentColor"/>
              </g>

              {/* Question Mark */}
              <text x="35" y="72" className="text-3xl font-bold" fill="currentColor">?</text>
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-warning">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-base-content">
            Oops! Looks like you've wandered off the grid.
          </h2>
          <p className="text-base-content/70">
            The page you're looking for isn't in stock. Don't worry, even the best inventory 
            systems sometimes misplace a page. Let's get you back on track.
          </p>
        </div>

        {/* Search Bar */}
        <div className="form-control">
          <div className="input-group justify-center items-center flex ">
            <input 
              type="text" 
              placeholder="Search..." 
              className="input input-bordered w-full max-w-xs" 
            />
            <button className="btn btn-square btn-primary">
              <MdSearch className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="btn btn-primary gap-2"
          >
            <MdHome className="h-5 w-5" />
            Return Home
          </Link>
          <Link 
            to="/dashboard" 
            className="btn btn-secondary gap-2"
          >
            Dashboard
          </Link>
          <Link 
            to="/support" 
            className="btn btn-accent gap-2"
          >
            <MdSupport className="h-5 w-5" />
            Contact Support
          </Link>
        </div>

        {/* Footer Links */}
        <div className="pt-8 border-t border-base-300">
          <div className="flex justify-center gap-4 text-sm">
            <Link 
              to="/help" 
              className="link link-hover text-base-content/70"
            >
              Help Center
            </Link>
            <Link 
              to="/faq" 
              className="link link-hover text-base-content/70"
            >
              FAQ
            </Link>
            <Link 
              to="/status" 
              className="link link-hover text-base-content/70"
            >
              System Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound; 