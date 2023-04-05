import Home from "./pages/home/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./pages/favorites/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import FavoriteProvider from "./hooks/FavoriteContext.jsx";
import Player from "./pages/player/index.jsx";
import NotFound from "./pages/notfound/index.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/:id" element={<Player />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </FavoriteProvider>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
