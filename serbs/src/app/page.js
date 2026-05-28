"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const container = useRef();

  // Get window height for animation calculations
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useGSAP(
    () => {
      // gsap code here...
      gsap.fromTo(
        `.${styles.ball}`,
        {
          // Jump from bottom to center and back
          y: windowHeight - 200,
          background: "linear-gradient(to bottom, #4ade80, #f59e0b)",
          duration: 1.2,
          ease: "bounce.out",
          yoyo: true,
          repeat: -1,
        },
        {
          y: windowHeight / 2 - 50,
          background: "linear-gradient(to bottom, #3b82f6, #9333ea)",
          duration: 1.2,
          yoyo: true,
          repeat: -1,
        },
      );
    },
    { scope: container },
  );

  return (
    <div className={styles.page}>
      <main className={styles.main} ref={container}>
        <div className={styles.ball}></div>
      </main>
    </div>
  );
}
