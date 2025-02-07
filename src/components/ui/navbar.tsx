import { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export default function Navbar() {
  const { setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full border-b bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            PayEase
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/solutions" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Solutions</Link>
            <Link to="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Pricing</Link>
            <Link to="/developers" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Developers</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/auth/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Log in</Link>
            <Link to="/auth/register" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md">Sign up</Link>
          </div>

          <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Menu</span>
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link to="/solutions" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={toggleMenu}>Solutions</Link>
          <Link to="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={toggleMenu}>Pricing</Link>
          <Link to="/developers" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={toggleMenu}>Developers</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={toggleMenu}>About</Link>
          <Link to="/auth/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" onClick={toggleMenu}>Log in</Link>
          <Link to="/auth/register" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md" onClick={toggleMenu}>Sign up</Link>
        </nav>
      </div>

      {menuOpen && <div onClick={toggleMenu} className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>}
    </header>
  );
}
