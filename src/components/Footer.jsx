const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 text-sm py-6 mt-10">
        <div className="container mx-auto flex flex-col items-center">
          {/* Liens du footer */}
            <div className="flex flex-wrap justify-center space-x-6 mb-4">
                <a href="#" className="hover:text-white">Conditions d'utilisation</a>
                <a href="#" className="hover:text-white">Politique de confidentialité</a>
                <a href="#" className="hover:text-white">Aide</a>
                <a href="#" className="hover:text-white">Publicité</a>
                <a href="#" className="hover:text-white">Presse</a>
            </div>

          {/* Logo IMDb style texte */}
        <h2 className="text-lg text-white font-bold mb-2">SILVER SCREEN</h2>

          {/* Copyright */}
        <p className="text-xs">
            © {new Date().getFullYear()} Silver Screen. Tous droits réservés.
        </p>
        </div>
    </footer>
    );
};

export default Footer;
