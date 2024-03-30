import React, { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="main">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full text-white">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
