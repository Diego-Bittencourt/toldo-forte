import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white shadow-lg w-full py-6 mt-10">
            <div className="container mx-auto flex justify-center items-center flex-col animate-fade-in">
                <div className="flex gap-6 mb-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125 hover:text-blue-500">
                        <FaFacebook size={32} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125 hover:text-pink-500">
                        <FaInstagram size={32} />
                    </a>
                </div>
                <p className="text-sm text-gray-700">&copy; {new Date().getFullYear()} Direitos reservados</p>
            </div>
        </footer>
    );
}
