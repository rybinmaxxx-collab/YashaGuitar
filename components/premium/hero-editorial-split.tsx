// Adapted from MiniDev UI 0.6.0, MIT. Editorial split retained; demo media removed.
import { Guitar, Layers, ShieldCheck, Settings } from "lucide-react";
import { Photo } from "@/components/photo";
export function HeroEditorialSplit() {
  return (
    <section data-slot="hero-editorial-split" className="hero dark">
      <Photo
        src="/images/red.jpg"
        alt="Красная электрогитара JM Guitars"
        className="hero-photo"
      />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Кастомные электрогитары</p>
          <h1>
            Знакомые формы.
            <br />
            Свой характер.
          </h1>
          <p className="hero-description">
            Создаём электрогитары на основе классических конструкций — в
            собственном прочтении мастера или по индивидуальным пожеланиям.
          </p>
          <div className="actions">
            <a className="btn cream" href="#contacts">
              Обсудить свою гитару →
            </a>
            <a className="btn outline" href="/configurator">
              <Settings />
              Перейти в конфигуратор
            </a>
          </div>
        </div>
        <div className="hero-benefits">
          <span>
            <Guitar />
            Классические формы
            <br />в авторском исполнении
          </span>
          <span>
            <Layers />
            Индивидуальная
            <br />
            комплектация
          </span>
          <span>
            <ShieldCheck />
            Прозрачный процесс
            <br />и личный контроль
          </span>
        </div>
      </div>
    </section>
  );
}
