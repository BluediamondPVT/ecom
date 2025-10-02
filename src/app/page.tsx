"use client";

import { Skiper40 } from '@/components/ui/skiper-ui/skiper40';
import Toggle from "@/components/toggle";
import { SimpleMouseFollow, Skiper61, SpringMouseFollow } from "@/components/ui/skiper-ui/skiper61";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import {Skiper30} from '@/components/ui/skiper-ui/skiper30';

const SPRING = { stiffness: 300, damping: 30 };

export default function Home() {
  // Example use of motion with useMotionValue and useSpring (optional)
  const mouseX = useMotionValue(0);
  const springX = useSpring(mouseX, SPRING);

  return (
    <main>
      <Skiper40 />
      <Toggle />

      {/* Uncomment to use */}
      {/* <SimpleMouseFollow />
      <Skiper61 /> */}

      <div className='border-4 border-red-500'>
        <SpringMouseFollow />

        <Skiper30 />
      </div>

    </main>
  );
}
