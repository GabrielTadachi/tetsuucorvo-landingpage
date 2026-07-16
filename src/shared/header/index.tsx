import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router";

export const Header = () => {

    return (
        <div className="grid grid-cols-2 px-4 md:px-20 py-2 items-center">
            <div className="col-span-1">
                <img src="/logo.png" className="w-12 md:max-w-15" />
            </div>

            <div className="col-span-1 flex justify-end">

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* <NavigationMenuItem>
                            <NavigationMenuTrigger>Livros</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul>
                                    <li>
                                        <LinkLivro title="Canil dos Condenados" redirect="canil-dos-condenados" />
                                        <LinkLivro title="Trono de Ossos" redirect="trono-de-ossos" />
                                        <LinkLivro title="Bruxa da Periferia" redirect="bruxa-da-periferia" />
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to="/blog">Blog</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem> */}
                    </NavigationMenuList>
                </NavigationMenu>

            </div>

        </div>
    )
}

