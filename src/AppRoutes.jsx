import Home from "./pages/home/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./pages/favorites/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import FavoriteProvider from "./hooks/FavoriteContext.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </FavoriteProvider>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
