import { Card, Grid } from "@nextui-org/react";
import React from "react";

const FavoriteCardPokemon = ({ id }: { id: number }) => {
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={"140px"}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCardPokemon;
