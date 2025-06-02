import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "../assets/buyer_images/risposta.png";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-lg shadow-sm transition-shadow">
            <div className="mx-auto flex max-w-7xl items-center px-4 lg:px-6 h-16">
                <Link className="flex items-center gap-2" to="/">
                    <img src={logo} alt="logo" className="h-13" />
                </Link>

                <nav className="ml-160 flex gap-3 sm:gap-4">
                    <Link className="text-lg font-medium hover:text-blue-600 transition-colors" to="/">
                        Home
                    </Link>
                    <Link className="text-lg font-medium hover:text-blue-600 transition-colors" to="/customer_success">
                        Customer Success
                    </Link>
                    <Link className="text-lg font-medium hover:text-blue-600 transition-colors" to="/contact">
                        Contact
                    </Link>
                </nav>

                <div className="ml-4 flex" >
                    <Button className="bg-blue-600 hover:bg-blue-700" size="sm">Get Started</Button>
                </div>
            </div>
        </header>
    );
}


