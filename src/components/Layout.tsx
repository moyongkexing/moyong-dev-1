import type { ReactNode, VFC } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center shadow-xl border-2 border-gray-300 md:w-11/12 xl:w-10/12">
      <Header />
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
