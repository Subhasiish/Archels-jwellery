"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const RouteFinder = dynamic(() => import("../../../components/RouteFinder"), { ssr: false });

export default function RouteFinderPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-green-400 to-green-500 flex flex-col items-center justify-center py-8 px-2">
      {/* Back Button */}
      <div className="w-full max-w-2xl mb-4 px-2 sm:px-0">
        {/* <Link href="/ai" className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-colors bg-white rounded-full px-4 py-2 shadow">
          <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Back to AI Solutions
        </Link> */}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl"
      >
        <RouteFinder />
      </motion.div>
    </main>
  );
}