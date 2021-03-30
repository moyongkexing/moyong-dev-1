import type { VFC } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "src/components/Layout";
import styles from "../styles/brackets.module.css";

const Profile: VFC = () => {
  return (
    <>
      <Head>
        <title>Profile | MO4g-DEV</title>
      </Head>
      <Layout>
        <div className="w-full md:border-b border-gray-300">
          {/* <div className="flex justify-center">coming soon</div> */}
          <p className={styles.profile}>coming soon</p>
        </div>
      </Layout>
    </>
  );
};
export default Profile;
