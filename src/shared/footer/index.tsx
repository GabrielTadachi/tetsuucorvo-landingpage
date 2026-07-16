import { Link } from "react-router";

export const Footer = () => {
    return (
        <footer className="relative z-10 mt-10 border-t border-white/10 bg-[#0a0405] text-white">
            {/* textura sutil + tom de sangue bem leve */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage: [
                        "radial-gradient(80% 120% at 50% 0%, rgba(120,8,8,0.45), transparent 70%)",
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    ].join(", "),
                    mixBlendMode: "overlay",
                }}
            />

            <div className="relative px-4 md:px-20 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img src="/logo_positivo.png" alt="TetsuUcorvo" className="w-12 mb-4" />
                        
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-white">Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="text-[#b8a8a8] hover:text-[#ff5a3c] transition-colors">
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-white">Contato</h3>
                        <a
                            href="mailto:tetsuucorvo@gmail.com"
                            className="text-[#b8a8a8] text-sm hover:text-[#ff5a3c] transition-colors"
                        >
                            tetsuucorvo@gmail.com
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-4 text-center text-[#8a7a7a] text-sm">
                    © {new Date().getFullYear()} TetsuUcorvo. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};
