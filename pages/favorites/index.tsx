import { useState, useEffect } from "react";
import { Layout } from "@/components/layouts";
import NoFavorites from "@/components/ui/NoFavorites";
import { localFavorites } from "@/utils";
import FavoritesPokemons from "@/components/ui/FavoritesPokemons";

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokémons - Favorites">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
