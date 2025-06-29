import {Routes, Route, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/products" >
                <Route index element={<Products />} />
                <Route path=":id" element={<ProductDetails />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}