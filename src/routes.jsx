import {Routes, Route, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/products/"  >
          <Route index element={<Products />} />
          <Route path=":id" element={<>

            <ProductDetails />
            <div className='my-4 bg-amber-200'>
              <Outlet />
            </div>
            </>} >
          </Route>
        </Route>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}