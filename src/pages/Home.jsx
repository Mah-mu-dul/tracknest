import { Link } from "react-router-dom";
import {
  MdArrowForward,
  MdInventory,
  MdInsights,
  MdSettings,
  MdIntegrationInstructions,
  MdNotifications,
  MdAdd,
  MdDashboard,
} from "react-icons/md";
import { FaBoxes } from "react-icons/fa";

function Home() {
  const pages = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: MdDashboard,
      description: "Get a complete overview of your business at a glance",
      color: "from-indigo-400 to-indigo-500",
      textColor: "text-white",
    },
    {
      name: "Inventory Management",
      path: "/inventory",
      icon: MdInventory,
      description: "Track and optimize your inventory levels in real-time",
      color: "from-teal-400 to-teal-500",
      textColor: "text-white",
    },
    {
      name: "Reports & Analytics",
      path: "/reports",
      icon: MdInsights,
      description: "Gain valuable insights into your operations",
      color: "from-blue-400 to-blue-500",
      textColor: "text-white",
    },
    {
      name: "Order Tracking",
      path: "/orders",
      icon: FaBoxes,
      description: "Keep tabs on incoming and outgoing orders",
      color: "from-purple-400 to-purple-500",
      textColor: "text-white",
    },
    {
      name: "Integrations",
      path: "/integrations",
      icon: MdIntegrationInstructions,
      description: "Connect with your favorite tools seamlessly",
      color: "from-pink-400 to-pink-500",
      textColor: "text-white",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: MdSettings,
      description: "Customize your experience",
      color: "from-gray-400 to-gray-500",
      textColor: "text-white",
    },
  ];
  const quickActions = [
    { name: "Add Item", path: "/inventory/add", icon: MdAdd },
    {
      name: "View Notifications",
      path: "/notifications",
      icon: MdNotifications,
    },
    { name: "Generate Report", path: "/reports/new", icon: MdInsights },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="pt-16 pb-24 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 text-transparent bg-clip-text pb-5">
          Your Inventory Management Hub Awaits
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Navigate through your inventory, generate insightful reports, and
          more—effortlessly.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Get Started
          <MdArrowForward className="ml-2 w-6 h-6" />
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-center mb-12 px-8 gap-4">
        {quickActions.map((action) => (
          <Link
            key={action.path}
            to={action.path}
            className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-gray-700 font-medium"
          >
            <span className="hidden md:inline">{action.name}</span>
            <action.icon className="w-6 h-6 md:hidden" />
          </Link>
        ))}
      </div>

      {/* Main Navigation Cards */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="flex flex-wrap justify-evenly gap-8">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group w-96 relative bg-white rounded-3xl shadow-md hover:shadow-xl p-8
                transform hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${page.color} flex items-center justify-center`}
                >
                  <page.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors duration-300">
                  {page.name}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  {page.description}
                </p>
                <div className="mt-6 flex items-center text-gray-800 group-hover:text-white transition-colors duration-300">
                  <span className="font-medium">Learn more</span>
                  <MdArrowForward className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-gray-600">
          <a
            href="/help"
            className="hover:text-teal-600 transition-colors duration-300"
          >
            Help Center
          </a>
          <a
            href="/support"
            className="hover:text-teal-600 transition-colors duration-300"
          >
            Contact Support
          </a>
          <a
            href="/privacy"
            className="hover:text-teal-600 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-teal-600 transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
