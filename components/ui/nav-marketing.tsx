"use client";
// Adapted from MiniDev UI 0.6.0, MIT. Original retained in vendor/jm-components.json.
import { useState } from "react";
import { Menu, X, SlidersHorizontal } from "lucide-react";
import { links } from "@/lib/catalog";
export function NavMarketing() {
  const [open, setOpen] = useState(false);
  return (
    <header data-slot="nav-marketing" className="site-header">
      <div className="wrap header-inner">
        <a href="/" className="brand">
          <b>JM</b> GUITARS
        </a>
        <nav
          aria-label="Основная навигация"
          className={open ? "main-nav open" : "main-nav"}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn cream" href="/configurator">
            <SlidersHorizontal size={18} />
            Конфигуратор →
          </a>
          <a className="btn outline" href="/#contacts">
            Обсудить заказ
          </a>
        </div>
        <button
          className="menu-toggle"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
