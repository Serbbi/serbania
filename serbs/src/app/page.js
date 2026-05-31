"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const container = useRef(null);

  // Animation configuration constants
  const radius = 200;
  const maxScale = 2.5;
  const dur = 0.35;

  // We use contextSafe to wrap our event handlers so GSAP knows
  // they belong to this component and can clean them up properly.
  const { contextSafe } = useGSAP({ scope: container });

  const handleMouseMove = contextSafe((e) => {
    const mx = e.clientX;
    const my = e.clientY;

    const cards = gsap.utils.toArray(`.${styles.card}`);

    cards.forEach((card) => {
      const r = card.getBoundingClientRect();
      const d = Math.hypot(
        mx - (r.left + r.width / 2),
        my - (r.top + r.height / 2),
      );
      const p = gsap.utils.clamp(0, 1, gsap.utils.mapRange(0, radius, 1, 0, d));

      gsap.to(card, {
        scale: 1 + (maxScale - 1) * p,
        duration: dur,
        overwrite: true,
        ease: "power2.out",
      });
    });
  });

  const handleMouseLeave = contextSafe(() => {
    const cards = gsap.utils.toArray(`.${styles.card}`);

    gsap.to(cards, {
      scale: 1,
      duration: dur * 2,
      overwrite: true,
      ease: "power2.out",
    });
  });

  return (
    <div className={styles.page}>
      <main className={styles.main} ref={container}>
        <div className={styles.header}>
          <h1>Serban Alexandru Tonie</h1>
          <div className={styles.subHeader}>
            <p>Master student in AI Engineering</p>
            <Image
              src="https://www.rug.nl/about-ug/practical-matters/huisstijl/logobank-new/corporatelogo/corporatelogowit/rugr_logoen_wit_rgb.png"
              alt="University of Groningen Logo"
              width={178}
              height={49}
              className={styles.universityLogo}
            />
          </div>
        </div>

        <ul className={styles.socialLinks}>
          <li>
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"
              alt="GitHub Icon"
              width={24}
              height={24}
            />
            <a
              href="https://github.com/Serbbi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
              alt="LinkedIn Icon"
              width={24}
              height={24}
            />
            <a
              href="https://www.linkedin.com/in/serban-tonie-0075061a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <div
          className={styles.stage}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.grid}>
            <div
              className={styles.card}
              style={{ "--x": "5%", "--y": "8%", "--r": "-3deg" }}
            >
              <div className={styles.cardIcon}>
                <Image
                  src="https://assets.codepen.io/16327/2D-keyframe.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <span className={styles.cardTitle}>Projects</span>
            </div>

            <div
              className={styles.card}
              style={{ "--x": "48%", "--y": "78%", "--r": "-4deg" }}
            >
              <div className={styles.cardIcon}>
                <Image
                  src="https://assets.codepen.io/16327/2D-flower.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <span className={styles.cardTitle}>Photography</span>
            </div>

            <div
              className={styles.card}
              style={{ "--x": "80%", "--y": "3%", "--r": "-4deg" }}
            >
              <div className={styles.cardIcon}>
                <Image
                  src="https://assets.codepen.io/16327/2D-morph.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <span className={styles.cardTitle}>Cooking</span>
            </div>

            <div
              className={styles.card}
              style={{ "--x": "12%", "--y": "56%", "--r": "2deg" }}
            >
              <div className={styles.cardIcon}>
                <Image
                  src="https://assets.codepen.io/16327/2D-circles.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <span className={styles.cardTitle}>Gaming</span>
            </div>

            <div
              className={styles.card}
              style={{ "--x": "40%", "--y": "12%", "--r": "2deg" }}
            >
              <div className={styles.cardIcon}>
                <Image
                  src="https://assets.codepen.io/16327/2D-sparkle.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <span className={styles.cardTitle}>Travel</span>
            </div>

            <div
              className={styles.card}
              style={{ "--x": "68%", "--y": "37%", "--r": "-1deg" }}
            >
              <div className={styles.cardIcon}>
                <Image
                  src="https://assets.codepen.io/16327/2D-wobble.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <span className={styles.cardTitle}>Music</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
