"use client";

import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Specs from "@/components/Specs";
import ShoeModel from "@/components/ShoeModel";

export default function JoggersPage() {
  return (
    <div className="bg-slate-50/30 backdrop-blur-sm">
      <ShoeModel />
      <div className="min-h-screen relative overflow-hidden ">
        <Navbar />

        <main className=" px-16 py-8 flex">
          <div className="space-y-8 self-center">
            <Content />
            <Features />
          </div>

          <div className="w-full self-end">
            <Specs />
          </div>
        </main>
      </div>
    </div>
  );
}
