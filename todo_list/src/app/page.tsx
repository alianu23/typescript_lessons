import React, { useState } from "react";
import Section from "../components/Section";

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col items-center  p-24 gap-5">
      <h1 className="font-semibold text-4xl ">ToDo APP</h1>
      <Section />
    </main>
  );
}
