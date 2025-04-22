import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {

  return (
    <>
        <Header/>
        <main className="max-w-[1600px] mx-auto container">
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}