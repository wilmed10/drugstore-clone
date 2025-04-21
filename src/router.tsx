import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./layouts/Layout";
import IndexPage from "./views/IndexPage"
const SearchPage = lazy(() => import('./views/SearchPage'))

export default function AppRouter() {
    return (
        <BrowserRouter basename="/drugstore-clone/">
            <Routes>

                <Route element={<Layout/>}>

                    <Route path='/' element={<IndexPage/>} index />

                    <Route path='/search' element={
                        
                        <Suspense fallback="Cargando...">
                            <SearchPage/>
                        </Suspense>
                        
                    } />

                </Route>

            </Routes>
        </BrowserRouter>
  )
}
