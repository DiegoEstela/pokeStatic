import { useTheme, Text, Spacer } from "@nextui-org/react";
import Image from "next/image";
export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 24px",
        backgroundColor: theme?.colors.gray800.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="icono de la app"
        width={70}
        height={70}
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okemón
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white" h3>
        Favoritos
      </Text>
    </div>
  );
};
