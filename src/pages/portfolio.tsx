import type { VFC } from "react";
import Head from "next/head";
import Layout from "src/components/Layout";
import PortfolioItem from "src/components/PortfolioItem";
import TechnologyTypes from "src/enums/TechTypes";

const PORTFOLIO_ITEMS = [
  {
    href: "https://moyong-front.web.app/",
    src: "/workoutJournal.png",
    name: "Workout Journal",
    created_at: "2021/3",
    tags: [
      TechnologyTypes.react,
      TechnologyTypes.toolkit,
      TechnologyTypes.firebase,
      TechnologyTypes.tailwind
    ],
    text: [
      "日々の筋トレを記録できるアプリです。",
      "主な機能としては、ログイン機能、投稿機能、コメント機能、GitHubカレンダー機能です。",
      "構成は React / Redux Toolkit / Typescript / Firebase です。",
      "UIはTailwind CSSとMaterial UIを使用しています。",
    ],
  },
  {
    href: "https://moyong-portfolio.vercel.app/",
    src: "/myportfolio.png",
    name: "My Portfolio",
    created_at: "2020/12",
    tags: [
      TechnologyTypes.html,
      TechnologyTypes.css,
      TechnologyTypes.javascript,
      TechnologyTypes.vercel
    ],
    text: [
      "HTML、CSS、JavaScriptだけで作成した自己紹介用ホームページです。",
      "YouTubeに転がっているHTML/CSSデザイン講座をひたすら写経していた時期があり、そのアウトプットとして作成しました。",
      "ホスティングはVercelを利用しています。",
    ],
  },
  {
    href: "https://homsta.herokuapp.com/",
    src: "/home-study.png",
    name: "Home Study",
    created_at: "2020/8",
    tags: [
      TechnologyTypes.rails,
      TechnologyTypes.bootstrap,
      TechnologyTypes.jquery,
      TechnologyTypes.rspec,
      TechnologyTypes.heroku,
    ],
    text: [
      "自宅で勉強する人のためのコミュニティサイトです。",
      "Twitterのようなつぶやき、いいね、フォロー、ユーザー編集などが行えます。",
      "勉強開始にあわせて「勉強を開始」ボタンを押して頂きますと、「勉強している人一覧」ページにあなたの名前が表示されます。",
      "勉強中、他の人から「エール」をもらったり、送ったりすることもできます。",
      "RSpecによるテストに力を入れました。",
    ],
  },
];
const Works: VFC = () => {
  return (
    <>
      <Head>
        <title>Portfolio | MO4g-DEV</title>
      </Head>
      <Layout>
        <div className="flex flex-col justify-center items-center">
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioItem
              href={item.href}
              src={item.src}
              name={item.name}
              created_at={item.created_at}
              tags={item.tags}
              text={item.text}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};
export default Works;
