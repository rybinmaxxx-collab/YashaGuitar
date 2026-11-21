import type { Metadata } from "next";
import "./globals.css";
import { NavMarketing } from "@/components/ui/nav-marketing";
import { FooterNav } from "@/components/ui/footer-nav";
import { links } from "@/lib/catalog";
export const metadata: Metadata = {
  title: "JM Guitars — кастомные электрогитары",
  description:
    "Авторские электрогитары JM Guitars. Работы мастерской и конфигуратор индивидуального инструмента.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <a className="skip-link" href="#content">
          К содержимому
        </a>
        <NavMarketing />
        <div id="content">{children}</div>
        <div className="dark">
          <div className="wrap">
            <FooterNav
              brand="JM GUITARS"
              links={links}
              className="site-footer"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
