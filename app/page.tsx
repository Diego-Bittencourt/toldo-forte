import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="centered bg-white shadow-lg flex flex-col items-center p-8 rounded-lg animate-fade-in">
        <img
          src="jpg"
          alt="Descrição da foto"
          className="foto mb-4"
        />
        <h1 className="text-4xl font-bold mb-4 animate-slide-up text-blue-600">Aqui é a primeira página</h1>
        <p className="text-lg mb-4 animate-slide-up text-gray-700">Bem-vindo ao nosso site!</p>
        <a
          href="/fazer-orcamento"
          className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 transition duration-500"
        >
          Fazer Orçamento
        </a>
      </div>
    </div>
  );
}
