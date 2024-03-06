import React from "react";
import LogoNima from "../assets/Imane.jpg";
const MonComposant = () => {
  return (
    <div name="home" className="relative h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full relative">
          <div className="max-w-md mx-auto bg-white shadow-lg overflow-hidden md:max-w-4xl sizevideo">
            <div className="md:flex">
              <div className="p-12 ">
                <h2 className="uppercase tracking-wide text-black mr-4 font-sofia">
                  À PROPOS DE MOI
                </h2>
                <p className="text-black py-8 font-sofia">
                  Hello, moi c’est Iman ! 🧚‍♀️ Je suis votre experte en beauté du
                  regard et maquillage semi-permanent 👄. Passionnée par l’idée
                  de révéler la beauté unique de chaque visage, j’adopte les
                  dernières techniques pour vous garantir un résultat qui vous
                  ressemble, durable et éblouissant 🪄. Votre satisfaction est
                  ma priorité 👩🏻‍💻. Prête à illuminer votre regard ? ✨.
                </p>
                <a
                  href="https://www.treatwell.fr/salon/nima-beauty-clinic/"
                  className="text-4xl sm:text-7 text-black font-sofia"
                >
                  Plus d'information
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="-ml-10 md:-ml-10 lg:-ml-10 z-10">
          <img
            src={LogoNima}
            alt="profil"
            className="rounded-2xl mx-4 w-2/3 md:w-full shadow-lg"
            style={{
              width: "30%",
              height: "80%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MonComposant;
