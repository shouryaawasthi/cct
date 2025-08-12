import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronLeft,
  X,
  AlignRight,
} from "lucide-react";
import logo from "../assets/images/logo.webp";
import { course } from "../data/course";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Courses",
    dropdown: ["Civil", "Mechanical", "Electrical", "CS & IT"],
  },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const getCoursesByCategory = (category) =>
  course.filter((c) => c.category === category);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileView, setMobileView] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY < 50);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeAllMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileView(null);
    setSelectedCategory(null);
  };

  const renderCourseDropdown = () => (
    <div className="absolute -left-50 top-full bg-white border shadow-lg rounded-lg p-4 w-[600px] flex flex-wrap gap-8 z-50">
      {["Civil", "Mechanical", "Electrical", "CS & IT"].map((category, i) => {
        const courses = getCoursesByCategory(category);
        return (
          <div key={i} className="min-w-[160px]">
            <h4 className="text-amber-500 font-semibold mb-2">{category}</h4>
            <ul className="space-y-1">
              {courses.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/courses/${item.slug}`}
                    className="block text-xs text-blue-900 hover:text-amber-500 transition"
                    onClick={closeAllMenus}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <Link to="/" onClick={closeAllMenus}>
          <img src={logo} alt="Logo" className="h-28 object-contain pt-2" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 font-semibold text-blue-900 text-lg">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div
                key={idx}
                className="relative"
                onMouseOver={() => setActiveDropdown(link.name)}
                onMouseOut={() => setActiveDropdown(null)}
              >
                <li>
                  <button
                    className="flex items-center gap-1 hover:text-amber-500 transition"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                </li>
                {activeDropdown === link.name && renderCourseDropdown()}
              </div>
            ) : (
              <li key={idx}>
                <Link
                  to={link.href}
                  className="hover:text-amber-500 transition"
                  onClick={closeAllMenus}
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop Login Dropdown */}
        <div
          className="hidden lg:flex relative"
          onMouseEnter={() => setActiveDropdown("Login")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button
            className="flex items-center gap-2 px-5 py-3 bg-blue-900 text-zinc-50 rounded-lg text-sm hover:bg-amber-500 transition"
            onClick={(e) => e.preventDefault()}
          >
            Login <ChevronDown size={16} />
          </button>
          {activeDropdown === "Login" && (
            <div className="absolute right-0 top-full bg-white border shadow-lg rounded-md w-48 z-50">
              <Link
                to="/login/student"
                className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-amber-500"
                onClick={closeAllMenus}
              >
                Student Login
              </Link>
              <Link
                to="/login/partner"
                className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-amber-500"
                onClick={closeAllMenus}
              >
                Partner Login
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-blue-900"
        >
          {mobileOpen ? <X size={30} /> : <AlignRight size={35} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-zinc-50 text-blue-900 px-6 py-4">
          <ul className="flex flex-col gap-2">
            {!mobileView && !selectedCategory && navLinks.map((link, idx) => (
              <li key={idx}>
                {link.dropdown ? (
                  <button
                    onClick={() => {
                      if (link.name === "Courses") setMobileView("Courses");
                      if (link.name === "Services") setMobileView("Services");
                    }}
                    className="flex justify-between items-center w-full py-2 font-semibold"
                  >
                    {link.name}
                    <ChevronDown size={18} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    onClick={closeAllMenus}
                    className="block py-2 hover:text-amber-500 transition"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}

            {/* Mobile Login Button */}
            {!mobileView && !selectedCategory && (
              <li>
                <button
                  onClick={() => setMobileView("Login")}
                  className="flex justify-between items-center w-full py-2 font-semibold"
                >
                  Login <ChevronDown size={18} />
                </button>
              </li>
            )}

            {/* Mobile Login Options */}
            {mobileView === "Login" && (
              <>
                <li>
                  <Link
                    to="/login/student"
                    onClick={closeAllMenus}
                    className="block py-2 pl-4 text-sm hover:text-amber-500"
                  >
                    Student Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login/partner"
                    onClick={closeAllMenus}
                    className="block py-2 pl-4 text-sm hover:text-amber-500"
                  >
                    Partner Login
                  </Link>
                </li>
              </>
            )}

            {/* Mobile Course Categories */}
            {mobileView === "Courses" &&
              !selectedCategory &&
              ["Civil", "Mechanical", "Electrical", "CS & IT","Other"].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className="block py-2 text-left text-sm hover:text-amber-500"
                  >
                    {cat}
                  </button>
                </li>
              ))}

            {/* Mobile Course Links */}
            {selectedCategory &&
              getCoursesByCategory(selectedCategory).map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/courses/${item.slug}`}
                    className="block text-sm py-1 pl-4 hover:text-amber-500"
                    onClick={() => {
                      setTimeout(closeAllMenus, 100);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            {(mobileView || selectedCategory) && (
              <li>
                <button
                  onClick={() => {
                    if (selectedCategory) setSelectedCategory(null);
                    else setMobileView(null);
                  }}
                  className="flex items-center gap-2 text-sm mt-2"
                >
                  <ChevronLeft size={18} /> Back
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
