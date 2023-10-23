import { Grid } from "@nextui-org/react";
import React from "react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

const FavoritesPokemons = ({
  favoritesPokemons,
}: {
  favoritesPokemons: number[];
}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemons.map((id) => (
        <FavoriteCardPokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritesPokemons;
