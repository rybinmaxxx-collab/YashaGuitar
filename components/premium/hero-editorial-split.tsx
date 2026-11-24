"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/photo";
import { works } from "@/lib/catalog";
import styles from "./hero-editorial-split.module.css";

const finishes = [
  { ...works[2], label: "Красная", color: "#d65241", light: "#68291f" },
  { ...works[0], label: "Зелёная", color: "#78a38c", light: "#284337" },
  { ...works[1], label: "Асимметричная", color: "#be946b", light: "#583b2d" },
  { ...works[3], label: "Чёрная", color: "#a7a7a7", light: "#35383f" },
];

function moveLight(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const stage = event.currentTarget;
  const bounds = stage.getBoundingClientRect();
  stage.style.setProperty("--light-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
  stage.style.setProperty("--light-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
}

function resetLight(event: PointerEvent<HTMLDivElement>) {
  event.currentTarget.style.removeProperty("--light-x");
  event.currentTarget.style.removeProperty("--light-y");
}

export function HeroEditorialSplit() {
  const [selected, setSelected] = useState(0);
  const work = finishes[selected];

  return (
    <section className={styles.hero} aria-labelledby="studio-title">
      <div className="wrap">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Мастерская кастомных электрогитар</p>
            <h1 id="studio-title">
              Гитара с <em>характером.</em>
            </h1>
            <p className={styles.description}>
              Собираем электрогитары вручную. Подбираем форму, гриф и электронику
              под то, как вы играете.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href="/configurator">
                Собрать свою гитару
              </a>
              <a className={styles.secondary} href="#works">
                Смотреть работы <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={styles.showcase} style={{ "--finish-light": work.light } as CSSProperties}>
            <div className={styles.stage} onPointerMove={moveLight} onPointerLeave={resetLight}>
              {finishes.map((finish, index) => (
                <div
                  className={styles.frame}
                  data-active={index === selected}
                  aria-hidden={index !== selected}
                  key={finish.slug}
                >
                  <Photo src={finish.image} alt={finish.title} className={styles.photo} />
                </div>
              ))}
            </div>
            <div className={styles.controls}>
              <div className={styles.swatches} role="group" aria-label="Выбрать работу мастерской">
                {finishes.map((finish, index) => (
                  <button
                    key={finish.slug}
                    type="button"
                    aria-label={finish.label}
                    aria-pressed={index === selected}
                    onClick={() => setSelected(index)}
                  >
                    <span style={{ background: finish.color }} />
                  </button>
                ))}
              </div>
              <a className={styles.project} href={`/works/${work.slug}`}>
                {work.title} <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
