import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headerLogo from "../assets/12.svg";

export const About = () => {
  return (
    <div className="about-container bg-white">
      <Navbar />
      <div className="w-full h-screen relative overflow-hidden">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center p-4">
          <div className="md:flex md:items-center">
            <div className="max-w-md mx-auto md:mr-10 mb-10 md:mb-0">
              <div className="shadow-lg overflow-hidden">
                <div className="p-12">
                  <h2 className="uppercase tracking-wide text-black mr-4 font-sofia">
                    À PROPOS DE MOI
                  </h2>
                  <p className="text-black py-8 font-sofia">
                    Hello, moi c’est Iman ! 🧚‍♀️ Je suis votre experte en beauté
                    du regard et maquillage semi-permanent 👄. Passionnée par
                    l’idée de révéler la beauté unique de chaque visage,
                    j’adopte les dernières techniques pour vous garantir un
                    résultat qui vous ressemble, durable et éblouissant 🪄.
                    Votre satisfaction est ma priorité 👩🏻‍💻. Prête à illuminer
                    votre regard ? ✨.
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
        </div>
      </div>
      <Footer />
    </div>
  );
};
