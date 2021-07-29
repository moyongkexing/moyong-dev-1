import TechTypes from "src/enums/TechTypes";

const PORTFOLIO_ITEMS = [
  {
    href: "https://blackjack-game-oop.vercel.app/",
    git: "https://github.com/moyongkexing/blackjack-game-oop",
    src: "/blackjack.png",
    name: "Black Jack Game",
    created_at: "2021/6",
    tags: [TechTypes.html, TechTypes.css, TechTypes.typescript, TechTypes.tailwind, TechTypes.vercel],
    text: [
      "オンライン学習プラットフォーム Recursion での課題作品で、その中で最も苦労したプロジェクトです。ユーザーはまず賭け金を調節して、それ以降は手持ちのカードの合計値に応じてアクションを選択します。ゲーム仕様は教材内で提示されたものを参考にしていますが、実装は完全自力です。",
      "100%オブジェクト指向で書いていて、いかに直感的に読めるように書くか？MVCをどう分離するか？が一番悩みました。Modelはすっきり書けたという自信がありますが、ViewとControllerが膨大なのが課題です(責務の区別が難しい)。また継承や抽象クラス、インターフェース、enum型、private修飾子などを使って堅牢なつくりを目指しました。ボット(AI)の判断の精度や、デザインにもこだわりました。(結局HTML/CSSが一番難しい...)",
    ],
  },
  {
    href: "https://computer-builder.vercel.app/",
    git: "https://github.com/moyongkexing/computer-builder",
    src: "/computer-builder.png",
    name: "Computer Builder",
    created_at: "2021/5",
    tags: [TechTypes.javascript, TechTypes.tailwind, TechTypes.api, TechTypes.vercel],
    text: [
      "オンライン学習プラットフォーム Recursion での課題作品で、選択されたPCパーツに基づいてスペックを計算するWebアプリです。",
      "APIには教材内で提示されたエンドポイントを使用しています。セレクトボックスが選択されるたびに、その右隣のセレクトボックスに選択肢をセットしています(キャッシュを使って高速化しました)。",
      "100%関数型プログラミングで書きました。関数について、「処理内容が似ているからといって安易に共通化しないこと」「1つのことだけに集中すること」などを意識しました。非同期処理や配列操作、データ加工の練習にもなりました。",
    ],
  },
  {
    href: "https://clicker-empire-game.vercel.app/",
    git: "https://github.com/moyongkexing/clicker-empire-game",
    src: "/clicker-empire-game.png",
    name: "Clicker Empire Game",
    created_at: "2021/5",
    tags: [TechTypes.javascript, TechTypes.tailwind, TechTypes.vercel],
    text: [
      "オンライン学習プラットフォーム Recursion での課題作品です。ハンバーガーをクリックしてお金を貯め、億万長者を目指すゲームです。一応、「有り金をひたすら株式につっこむ」という戦略があります。",
      "アイテム仕様は教材内で提示されたものに沿っていますが、実装は完全自力です。",
      "半分は関数型(?)、半分はオブジェクト指向で書きました。100%オブジェクト指向で作りたかったですが良いロジックが思いつかず...。",
      "直感的な命名や、メソッドの粒度を小さくすること、関数をネストさせて可読性をあげることにこだわりました。",
    ],
  },
  {
    href: "",
    git: "https://github.com/moyongkexing/moyong-dev",
    src: "/moyong-dev.png",
    name: "MO4g-DEV",
    created_at: "2021/3",
    tags: [TechTypes.next, TechTypes.typescript, TechTypes.tailwind, TechTypes.vercel],
    text: [
      "2つ目の自己紹介用ホームページです。",
      "Next.jsでのSSG、ISRに手を出してみたくて作り始めましたがRecursionというサービスに出会い、ただのポートフォリオ置き場になりました。",
      "現時点のこだわりポイントはこのページの技術タグにenumsを使っていることで、Qiitaにも簡単な記事を投稿しました。データをmapメソッドで展開することでJSXをすっきりと(?)書くことにもこだわっています。",
    ],
  },
  {
    href: "https://moyong-front.web.app/",
    git: "https://github.com/moyongkexing/workout-journal",
    src: "/workoutJournal.png",
    name: "Workout Journal",
    created_at: "2021/3",
    tags: [TechTypes.react, TechTypes.toolkit, TechTypes.typescript, TechTypes.firebase, TechTypes.tailwind],
    text: [
      "Udemyのハンズオンアプリを改造してつくったSPAです。日々の筋トレ記録をシェアできます。",
      "ログイン機能、投稿機能はミヨウミマネで実装し、自力でコメント機能とGitHubカレンダー機能を追加しました。",
      "UIはTailwind CSSとMaterial UIを使用しています。",
      "Reduxによるステート管理やHooksの記法、FirebaseのAuthentication、FireStoreの使い方を学びました。",
    ],
  },
  {
    href: "https://moyong-portfolio.vercel.app/",
    git: "https://github.com/moyongkexing/my-portfolio",
    src: "/myportfolio.png",
    name: "My Portfolio",
    created_at: "2020/12",
    tags: [TechTypes.html, TechTypes.css, TechTypes.javascript, TechTypes.vercel, TechTypes.responsive],
    text: [
      "HTML、CSS、JavaScriptだけで作成した自己紹介用ホームページです。",
      "YouTubeに転がっているHTML/CSSデザイン講座をひたすら写経していた時期があり、そこで貯めたノウハウを凝縮して作りました。",
      "ホスティングはVercelを利用しています。",
    ],
  },
  {
    href: "https://homsta.herokuapp.com/",
    git: "https://github.com/moyongkexing/home-study",
    src: "/home-study.png",
    name: "Home Study",
    created_at: "2020/8",
    tags: [
      TechTypes.rails,
      TechTypes.bootstrap,
      TechTypes.jquery,
      TechTypes.postgresql,
      TechTypes.rspec,
      TechTypes.heroku,
    ],
    text: [
      "勉強はじめたての頃に、スクール講師の方の力とフレームワークの魔法をひたすら頼ってなんとか形にしたwebアプリです。",
      "機能としてはTwitterのようなつぶやき投稿機能、いいね、コメント、フォローなどが行えます。",
      "HTML/CSSから始めて、GitやMVC、RDB、セッション、ソフトウェアテストなど、web開発の基本的な概念に一通り触れることができました。AWSデプロイとDocker運用にも挑戦しましたが挫折してしまいました。当時はネットの指南記事や書籍を読み漁っていましたが、今振り返れば公式ドキュメントを読み解けるだけの基礎的な知識がまず必要でした。webを支える技術がどれほど広範にわたるものか痛感しました。",
    ],
  },
];

export default PORTFOLIO_ITEMS;
