import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Diego Estela" />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre: ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "8px 24px",
        }}
      >
        {children}
      </main>
    </>
  );
};
