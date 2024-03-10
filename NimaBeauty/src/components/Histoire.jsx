import React from "react";
import LogoNima from "../assets/Imane.jpg";
const MonComposant = () => {
  return (
    <div name="home" className="relative w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4">
        <div className="md:flex md:items-center">
          <div className="max-w-md mx-auto md:mr-10 mb-10 md:mb-0">
            <div className="shadow-lg overflow-hidden">
              <div className="p-12">
                <h2 className="uppercase tracking-wide text-white mr-4 font-sofia">
                  À PROPOS DE MOI
                </h2>
                <p className="text-white py-8 font-sofia">
                  Hello, moi c’est Iman ! 🧚‍♀️ Je suis votre experte en beauté du
                  regard et maquillage semi-permanent 👄. Passionnée par l’idée
                  de révéler la beauté unique de chaque visage, j’adopte les
                  dernières techniques pour vous garantir un résultat qui vous
                  ressemble, durable et éblouissant 🪄. Votre satisfaction est
                  ma priorité 👩🏻‍💻. Prête à illuminer votre regard ? ✨.
                </p>
                <a
                  href="https://www.treatwell.fr/salon/nima-beauty-clinic/"
                  className="text-4xl sm:text-7 text-white font-sofia"
                >
                  Plus d'information
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={LogoNima}
              alt="profil"
              className="rounded-2xl imaneimg max-w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonComposant;
