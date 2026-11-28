/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const FAVORITES_STORAGE_KEY = "sweet-house-favorites";
const FavoritesContext = createContext(null);

function getStoredFavoriteIds() {
  try {
    const storedFavorites = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    return Array.isArray(parsedFavorites) ? parsedFavorites : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(getStoredFavoriteIds);

  useEffect(() => {
    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favoriteIds)
    );
  }, [favoriteIds]);

  function toggleFavorite(productId) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(productId)
        ? currentIds.filter((id) => id !== productId)
        : [...currentIds, productId]
    );
  }

  function isFavorite(productId) {
    return favoriteIds.includes(productId);
  }

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
}
