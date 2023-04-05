import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favoritos";

export default function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return <FavoriteContext.Provider value={{ favorite, setFavorite }}>{children}</FavoriteContext.Provider>;
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoriteContext);

  function toggleFavorite(newFavorite) {
    const repeated = favorite.some((item) => item.id === newFavorite.id);

    let newList = [...favorite];

    if (!repeated) {
      newList.push(newFavorite);
      console.log(newList);
      return setFavorite(newList);
    }
    
    newList = favorite.filter((fav) => fav.id !== newFavorite.id);
    console.log(newList);
    return setFavorite(newList);
    
  }
  return {
    favorite,
    toggleFavorite,
  };
}
