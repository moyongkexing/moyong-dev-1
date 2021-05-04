import type { VFC } from "react";
import Head from "next/head";
import Layout from "src/components/Layout";
import PortfolioItem from "src/components/PortfolioItem";
import TechTypes from "src/enums/TechTypes";

const PORTFOLIO_ITEMS = [
  {
    href: "",
    src: "/moyong-dev.png",
    name: "MO4g-DEV",
    created_at: "2021/3",
    tags: [
      TechTypes.next,
      TechTypes.typescript,
      TechTypes.tailwind,
      TechTypes.vercel,
    ],
    text: [
      "2つ目の自己紹介用ホームページです。",
      "ある方のポートフォリオサイトが素敵だったので許可を得て模写しました。",
      // "Next.jsでSSG、ISRに少し手を出しています。",
      "コンポーネント設計と型定義にこだわりました。",
    ],
  },
  {
    href: "https://moyong-front.web.app/",
    src: "/workoutJournal.png",
    name: "Workout Journal",
    created_at: "2021/3",
    tags: [TechTypes.react, TechTypes.toolkit, TechTypes.typescript, TechTypes.firebase, TechTypes.tailwind],
    text: [
      "日々の筋トレを記録できるアプリです。",
      "主な機能としては、ログイン機能、投稿機能、コメント機能、GitHubカレンダー機能です。",
      "UIはTailwind CSSとMaterial UIを使用しています。",
      "Reduxによるステート管理とHooksの書き方が身についたと思います。",
    ],
  },
  {
    href: "https://moyong-portfolio.vercel.app/",
    src: "/myportfolio.png",
    name: "My Portfolio",
    created_at: "2020/12",
    tags: [TechTypes.html, TechTypes.css, TechTypes.javascript, TechTypes.vercel, TechTypes.responsive],
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
    tags: [TechTypes.rails, TechTypes.bootstrap, TechTypes.jquery, TechTypes.rspec, TechTypes.heroku],
    text: [
      "自宅で勉強する人のためのコミュニティサイトです。",
      "Twitterのようなつぶやき、いいね、フォロー、ユーザー編集などが行えます。",
      "勉強開始にあわせて「勉強を開始」ボタンを押すと、「勉強している人一覧」ページに自分の名前が表示されます。",
      "勉強中、他の人から「エール」をもらったり、送ったりすることができます。",
      "テストを頑張りました。",
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
