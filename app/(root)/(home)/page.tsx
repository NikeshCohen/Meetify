"use-client";

import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-10">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between px-4 py-4 md:px-5 md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[300px] rounded text-center py-2 text-base font-normal">
            Upcoming meeting at: 12:30pm
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg text-sky-1">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
