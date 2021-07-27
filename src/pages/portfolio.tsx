import Head from "next/head";
import type { VFC } from "react";
import Layout from "src/components/Layout";
import PortfolioItem from "src/components/PortfolioItem";
import PORTFOLIO_ITEMS from "src/variables/portfolioItems";

const Works: VFC = () => {
  return (
    <>
      <Head>
        <title>Portfolio | MO4g-DEV</title>
      </Head>
      <Layout>
        <div className="flex flex-col justify-center items-center">
          {PORTFOLIO_ITEMS.map((item, index) => {return (
            <PortfolioItem
              key={index}
              href={item.href}
              git={item.git}
              src={item.src}
              name={item.name}
              created_at={item.created_at}
              tags={item.tags}
              text={item.text}
            />
          )})}
        </div>
      </Layout>
    </>
  );
};
export default Works;
