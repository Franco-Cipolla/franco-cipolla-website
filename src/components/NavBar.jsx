import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import BurgerGesprächBtn from './BurgerGesprächBtn'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: "Home", to: "/home" },
        { label: "About", to: "/about" },
        { label: "Service", to: "/projects" },
        { label: "Contact", to: "/contact" },
    ];

    return (
        <nav className="flex justify-between items-center p-4 relative">
            <ul className="flex gap-6 hidden md:flex">
                {menuItems.map(item => (
                    <li key={item.label}>
                        <Link to={item.to} className="text-black text-lg hover:text-[#003566] transition" >{item.label}</Link>
                    </li>
                ))}
            </ul>
            <h1 className="font-semibold text-lg lg:text-2xl">Franco Cipolla</h1>
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} />
            </div>

            {/* Mobile Menu Overlay bleibt immer im DOM */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col transition-all duration-500 ${
                    isOpen
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-full opacity-0 pointer-events-none"
                }`}
            >
                <button
                    className="absolute top-6 right-8 cursor-pointer text-white text-4xl"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                >
                    &times;
                </button>
                <ul className="flex flex-col items-center justify-center h-full space-y-8">
                    {menuItems.map(item => (
                        <li key={item.label}>
                            <Link
                                to={item.to}
                                className="text-white text-2xl font-semibold hover:text-blue-400 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <BurgerGesprächBtn />
                </ul>

            </div>

            <div className="hidden md:flex space-x-2">
                <button className="px-4 py-2 rounded bg-[#003566] text-white cursor-pointer hover:bg-[#001D3D] transition ">Contact</button>
                <button className="px-4 py-2 rounded bg-white border border-[#003566] text-[#003566] cursor-pointer hover:text-[#001D3D] hover:border-[#001D3D] transition ">Erstgespräch Buchen</button>
            </div>
        </nav>
    )
}

export default NavBar
