import CallList from "@/components/Callist";
import React from "react";

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10">
      <h1 className="text-3xl font-bold">Recording</h1>
      <CallList type="recordings" />
    </section>
  );
};

export default Recordings;
