'use client';

import React from "react";

const ThankYouUpsellPage = () => {
  return (
    <div className="container mx-auto text-center mt-12 px-4">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2">
          <img
            src="/bjj40-images/bjjmentoria.png"
            alt="Champion"
            className="w-full mb-3"
          />
          <h1 className="font-bold">Parabéns! Você agora faz parte da Mentoria Elite BJJ 40+</h1>
          <p className="mt-2 text-gray-600">
            Seu acesso foi confirmado. Em breve, você receberá todas as informações no seu e-mail.
          </p>
        </div>
      </div>
      <footer className="bg-white text-center py-4 mt-5 border-t">
        <div className="container mx-auto px-4">
          <p className="text-gray-600">
            Qualquer dúvida, entre em contato com nosso suporte.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouUpsellPage;
