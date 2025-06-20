import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Layout from "./components/Layout";
import { ThemeProvider } from "./themeContext/ThemeContext";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}