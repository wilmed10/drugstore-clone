import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import MobileSidebar from "./MobileSideBar";

export default function Header() {
  return (
    <div className="max-w-[1600px] mx-auto">
        {/* banner */}
        <div>
            <video width="100%" autoPlay muted loop playsInline>
                <source src="./assets/bannersup.mp4" />
            </video>
        </div>
        {/* middle menu */}
        <div className="flex px-6 md:px-20 justify-between md:gap-2 lg:gap-12 bg-[#FCFCFC] text-sm">
            <Link to="/">
                <img src="./assets/logoeco.svg" alt="Logo Droguería La Economía" className="w-37 md:w-47 my-4.5"/>
            </Link>
            {/* search */}
            <div className="hidden my-4.5 bg-search md:flex flex-1 items-center rounded-lg">
                <input 
                    placeholder="Busca por producto, marca y más..."
                    autoComplete="off"
                    className="flex-1 text-[#98A2B3] text-sm pl-4 focus:outline-none"
                />
                <button className="px-2">
                    <img src="./assets/search.svg" alt="lupa" className="w-4.5"/>
                </button>
            </div>
            {/* options (ubicacion, sesion, cupones, carrito) */}
            <div className="flex gap-4 items-center">
                <Dropdown
                    trigger={
                        <div className="hidden md:flex">
                            <img src="./assets/location.svg" alt="ubicacion" className="max-w-5 mr-1" />
                            <span className="text-sm">Barranquilla</span>
                        </div>
                    }
                >
                    <span className="text-sm hover:text-primary cursor-pointer pb-2">Cartagena</span>
                    <span className="text-sm hover:text-primary cursor-pointer pb-2">Bogotá</span>
                    <span className="text-sm hover:text-primary cursor-pointer pb-2">Medellín</span>
                </Dropdown>
                <Dropdown
                    trigger={
                        <>
                            <img src="./assets/profile.svg" alt="perfil" className="max-w-5 " />
                            <span className="text-sm hidden md:flex">Wilson</span>
                            <img src="./assets/down-black.svg" alt="flecha abajo" className="hidden md:flex" />
                        </>
                    }
                >
                    <span className="cursor-pointer pb-2">Mi cuenta</span>
                    <span className="cursor-pointer pb-2">Pedidos</span>
                    <span className="cursor-pointer pb-2">Cerrar sesión</span>
                </Dropdown>
                <div className="flex gap-1 items-center">
                    <img src="./assets/coupon.svg" alt="cupón" className="max-w-5" />
                    <span className="text-sm hidden md:flex">Cupones</span>
                </div>
                <div className="flex items-center relative">
                    <div className="absolute top-[-12px] md:top-[-10px] lg:top-[-12px] left-[12px] lg:left-[10px] w-[21px] h-[21px] text-center text-white bg-[#BB251A] text-xs rounded-full leading-[22px]">1</div>
                    <img src="./assets/cart.svg" alt="carrito" className="max-w-5" />
                </div>
            </div>
        </div>
        {/* navbar desktop */}
        <div className="hidden md:flex px-6 md:px-20 py-2 mx-auto bg-blue-nav text-sm font-medium text-white gap-8">
            <Dropdown
                trigger={
                    <div className="flex gap-2">
                        <span className="font-medium">Medicamentos</span>
                        <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
                    </div>
                }
            >
                <span className="cursor-pointer pb-2 text-black">Opción 1</span>
                <span className="cursor-pointer pb-2 text-black">Opción 2</span>
                <span className="cursor-pointer pb-2 text-black">Opción 3</span>
            </Dropdown>
            <Dropdown
                trigger={
                    <div className="flex gap-2">
                        <span className="font-medium">Botiquín</span>
                        <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
                    </div>
                }
            >
                <span className="cursor-pointer pb-2 text-black">Opción 1</span>
                <span className="cursor-pointer pb-2 text-black">Opción 2</span>
                <span className="cursor-pointer pb-2 text-black">Opción 3</span>
            </Dropdown>
            <Dropdown
                trigger={
                    <div className="flex gap-2">
                        <span className="font-medium">Salud y belleza</span>
                        <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
                    </div>
                }
            >
                <span className="cursor-pointer pb-2 text-black">Opción 1</span>
                <span className="cursor-pointer pb-2 text-black">Opción 2</span>
                <span className="cursor-pointer pb-2 text-black">Opción 3</span>
            </Dropdown>
            <Dropdown
                trigger={
                    <div className="flex gap-2">
                        <span className="font-medium">Cuidado del bebé</span>
                        <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
                    </div>
                }
            >
                <span className="cursor-pointer pb-2 text-black">Opción 1</span>
                <span className="cursor-pointer pb-2 text-black">Opción 2</span>
                <span className="cursor-pointer pb-2 text-black">Opción 3</span>
            </Dropdown>
            <Dropdown
                trigger={
                    <div className="flex gap-2">
                        <span className="font-medium">Alimentos y bebidas</span>
                        <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
                    </div>
                }
            >
                <span className="cursor-pointer pb-2 text-black">Opción 1</span>
                <span className="cursor-pointer pb-2 text-black">Opción 2</span>
                <span className="cursor-pointer pb-2 text-black">Opción 3</span>
            </Dropdown>
            <Dropdown
                trigger={
                    <div className="flex gap-2">
                        <span className="font-medium">Varios</span>
                        <img src="./assets/down-arrow.svg" alt="flecha abajo" className="w-4" />
                    </div>
                }
            >
                <span className="cursor-pointer pb-2 text-black">Opción 1</span>
                <span className="cursor-pointer pb-2 text-black">Opción 2</span>
                <span className="cursor-pointer pb-2 text-black">Opción 3</span>
            </Dropdown>
        </div>
        {/* search for mobile */}
        <MobileSidebar />
        {/* location for mobile */}
        <div className="flex md:hidden px-6 py-2 bg-[#ECF4FC] gap-2">
            <Dropdown
                trigger={
                    <>
                        <img src="./assets/location-blue.svg" alt="ubicacion" className="max-w-5" />
                        <span className="text-xs text-[#1C58B7]">Barranquilla</span>
                        <img src="./assets/down-blue.svg" alt="flecha abajo" className="" />
                    </>
                }
            >
                <span className="cursor-pointer pb-2">Cartagena</span>
                <span className="cursor-pointer pb-2">Bogotá</span>
                <span className="cursor-pointer pb-2">Medellín</span>
            </Dropdown>
        </div>
    </div>
  )
}
