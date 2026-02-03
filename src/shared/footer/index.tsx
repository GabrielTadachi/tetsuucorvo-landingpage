import { Link } from "react-router";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="px-4 md:px-20 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img src="/logo.png" className="w-12 mb-4" />
                        <p className="text-gray-400 text-sm">
                            Histórias que exploram os medos humanos e as complexidades da mente.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold mb-4">Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/sobre" className="text-gray-400 hover:text-white">
                                    Sobre o Autor
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold mb-4">Contato</h3>
                        <p className="text-gray-400 text-sm">
                            tetsuucorvo@gmail.com
                        </p>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} TetsuUcorvo. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};