import type { VFC } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "src/components/Layout";
import Tags from "src/components/Tags";
import ScheduleIcon from "@material-ui/icons/Schedule";

const workoutJournalTags = ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"]
const Works: VFC = () => {
  return (
    <>
      <Head>
        <title>Portfolio | MO4g-DEV</title>
      </Head>
      <Layout>
        <div className="flex mt-10 py-5 px-10 border shadow-md">
          <div className="m-5">
            <a href="https://moyong-front.web.app/">
              <Image src="/workoutJournal.png" width={450} height={350} />
            </a>
          </div>
          <div className="m-5">
            <h1 className="my-3 text-2xl font-bold">Workout Journal</h1>
            <p className="my-3 text-sm ">
              <ScheduleIcon className="text-sm mx-1"/>
              2021/3
            </p>
            <div className="flex my-3">
              {workoutJournalTags.map((tag) => (
                <Tags name={tag} />
              ))}
            </div>
            <p className="my-3">日々の筋トレを記録できるアプリです。</p>
            <p className="my-3">主な機能としては、ログイン機能、投稿機能、コメント機能、GitHubカレンダー機能です。</p>
            <p className="my-3">構成は React / Redux Toolkit / Typescript / Firebase です。</p>
            <p className="my-3">UIはTailwind CSSとMaterial UIを使用しています。</p>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Works;
