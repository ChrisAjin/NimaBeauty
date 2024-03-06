import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
  import SpaceCity5 from "../assets/Imane.jpg";

  import SpaceCity8 from "../assets/IMG.jpg";



export const footerLinks = [
    {
        title: "NIMA BEAUTY CLINIC",
        links: [
            { name: "À propos", link: "/" },
            { name: "Prestation", link: "/" },
            { name: "Rendez-vous", link: "/" },
            { name: "Tarifs", link: "/" },
            { name: "Contactez-nous", link: "/" },
        ],
    },
    {
        title: "SHOP",
        links: [
            { name: "Mon compte", link: "/" },
            { name: "Historique d'achat", link: "/" },
            { name: "CGV", link: "/" },

        ],
    },
    {
        title: "INFORMATION",
        links: [
            { name: "Mentions légales", link: "/" },
            { name: "Protection des données", link: "/" },
			{ name: "Utilisation des cookies", link: "/" },
			{ name: "Plan du site", link: "/" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

  export const ServiceData = [

	{
	  title: "Management",
	  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	  backgroundImage: SpaceCity5,
	},
	{
	  title: "Production",
	  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	  backgroundImage: SpaceCity8,
	},
  ];
