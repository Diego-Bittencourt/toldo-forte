import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="centered bg-gradient shadow w-full">
            <div className="flex gap-6 mb-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125 hover:text-blue-500">
                    <FaFacebook size={32} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-125 hover:text-pink-500">
                    <FaInstagram size={32} />
                </a>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Direitos reservados</p>
        </footer>
    );
}