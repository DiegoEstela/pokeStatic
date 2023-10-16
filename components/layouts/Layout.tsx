import Head from "next/head";
import { FC, PropsWithChildren } from "react";

interface Props {
  title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon Static"}</title>
        <meta name="author" content="Diego Estela" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
      </Head>
      <main>{children}</main>
    </>
  );
};
