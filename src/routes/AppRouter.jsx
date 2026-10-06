import { Routes, BrowserRouter, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Veterinaria from "../pages/Veterinaria/Veterinaria";
import NotFound from "../pages/Errors/404-NotFound/NotFound";
import Login from "../pages/Login/Login.jsx";
import Nosotros from "../pages/Nosotros/Nosotros";
 
export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/veterinarias" element={<Veterinaria />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                </Route>
 
                <Route path="/login" element={<Login />} />
 
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
 