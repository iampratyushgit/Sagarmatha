import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

export function AppRoutes() {
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