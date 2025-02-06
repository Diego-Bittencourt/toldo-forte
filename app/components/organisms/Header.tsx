import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="logo.jpg" 
          alt="Logo da Empresa"
          className="h-10"
        />
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Sobre Nós</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Serviços</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contato</a>
        </nav>
        <a
          href="/fazer-orcamento"
          className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 transition duration-500"
        >
          Fazer Orçamento
        </a>
      </div>
    </header>
  );
}
