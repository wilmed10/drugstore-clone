
export default function Footer() {
  return (
    <div className="flex flex-col bg-[#FCFCFD] text-[#344054] px-4 md:px-20 py-10 gap-12">

      <div className="flex flex-col md:flex-row justify-between">

        <div className="grid grid-cols-2 md:flex gap-y-8 md:gap-8 text-wrap pb-8 break-words">
          <div className="flex flex-col gap-2 max-w-[170px]">
              <span className="text-lg md:text-xl font-bold">La empresa</span>
              <p className="text-xs md:text-sm">Quienes somos</p>
              <p className="text-xs md:text-sm">Misión, Visión e Historia</p>
              <p className="text-xs md:text-sm">Ética</p>
              <p className="text-xs md:text-sm">Nuestras sucursales</p>
          </div>
          <div className="flex flex-col gap-2 max-w-[170px]">
              <span className="text-lg md:text-xl font-bold">Información</span>
              <p className="text-xs md:text-sm">Aviso de Privacidad</p>
              <p className="text-xs md:text-sm">Habeas Data</p>
              <p className="text-xs md:text-sm">Términos y Condiciones de promociones</p>
          </div>
          <div className="flex flex-col gap-2 max-w-[170px]">
              <span className="text-lg md:text-xl font-bold">Club Vida Sana</span>
              <p className="text-xs md:text-sm">Beneficios del Club</p>
              <p className="text-xs md:text-sm">Actualiza tus datos</p>
          </div>
          <div className="flex flex-col gap-2 max-w-[170px]">
              <span className="text-lg md:text-xl font-bold">Contacto</span>
              <p className="text-xs md:text-sm">315 782 3477</p>
              <p className="text-xs md:text-sm">Radicar PQRS</p>
              <p className="text-xs md:text-sm">servicioalcliente<br/>@droguerialaeconomia.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="hidden md:flex text-xl font-bold" >!Descarga gratis la App!</span>
            <div className="flex border-[2px] px-8 py-4 border-[#D0D5DD] justify-center items-center rounded-2xl gap-8">
              <img src="./assets/qr.png" alt="QR" className="hidden md:flex max-w-[103px]" />
              <div className="hidden md:flex w-px h-6 md:h-16 bg-[#D0D5DD]" />
              <img src="./assets/logo-corto.svg" alt="Logo La Economía" className="flex max-w-[74px]" />
              <div className="md:hidden w-px h-6 md:h-16 bg-[#D0D5DD]" />
              <span className="flex md:hidden text-lg md:text-xl font-bold" >!Descarga gratis la App!</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="hidden md:flex text-xl font-bold" >Síguenos en:</span>
            <span className="flex md:hidden text-xl font-bold" >Redes sociales</span>
            <div className="flex flex-row gap-4">
              <img src="./assets/youtube.svg" alt="youtube" className="w-5" />
              <img src="./assets/instagram.svg" alt="instagram" className="w-5" />
              <img src="./assets/facebook.svg" alt="facebook" className="w-5" />
              <img src="./assets/whatsapp.svg" alt="whatsapp" className="w-5" />
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row items-center justify-between text-base gap-6 md:gap-0">
        <p className="text-sm text-wrap">©2023 Droguería La Economía. Todos los derechos reservados. v5.0 - <a href="/politicas" className="underline text-sm font-medium">Politicas de privacidad</a></p>
        <div className="flex gap-2 items-baseline">
          <p className="text-sm">Powered By: </p>
          <img src="./assets/mooba.png" alt="mooba" className="w-30" />
        </div>
      </div>

    </div>
  )
}
