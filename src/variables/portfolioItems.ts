import TechTypes from "src/enums/TechTypes";

const PORTFOLIO_ITEMS = [
  {
    href: "",
    src: "/moyong-dev.png",
    name: "MO4g-DEV",
    created_at: "2021/3",
    tags: [TechTypes.next, TechTypes.typescript, TechTypes.tailwind, TechTypes.vercel],
    text: [
      "2つ目の自己紹介用ホームページです。",
      "Next.jsでのSSG、ISRに手を手を出してみたくて作り始めました（ちまちま更新していきます）。",
      "現時点のこだわりポイントはこのページの技術タグをTypeScriptのenumsをつけて書いていることでして、よりタグらしいコンポーネントに仕上げられたのではという気がしてます。データをmapメソッドで展開することでJSXをすっきりと(?)書くことにも挑戦しています。",
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
      "20年春の勉強はじめたての頃に、スクール講師の方の力とフレームワークの魔法をひたすら頼ってなんとか形にしたwebアプリです。",
      "機能としてはTwitterのようなつぶやき投稿機能、いいね、コメント、フォローなどが行えます。",
      "HTML/CSSから始めて、GitやMVC、RDB、セッション、ソフトウェアテストなど、web開発における基本的な概念に一通り触れることができました。AWSデプロイとDocker運用にも挑戦したのですが、結局挫折してしまいました。ネットに転がっている指南記事や書籍を読み漁っていたのですが、今振り返れば公式ドキュメントを読み解けるだけの基礎的な知識がまず必要だったと思います。webを支える技術がどれほど広範にわたるものかを痛感しました。",
    ],
  },
];

export default PORTFOLIO_ITEMS;
