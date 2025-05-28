import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Layout from "./components/Layout";
import { ThemeProvider } from "./themeContext/ThemeContext";

export default function App() {
  return (
    <Router>
      <ThemeProvider>
      <Layout>
        <AppRoutes />
      </Layout>
      </ThemeProvider>
    </Router>
  );
}