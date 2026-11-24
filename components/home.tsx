"use client";
import { useRouter } from "next/navigation";
import {
  Guitar,
  Layers,
  AudioLines,
  Settings,
  Palette,
  PenTool,
  Check,
  Star,
  Users,
  Wrench,
  Mail,
  Send,
  Monitor,
} from "lucide-react";
import { HeroEditorialSplit } from "@/components/premium/hero-editorial-split";
import { ProductCard } from "@/components/ui/product-card";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { ImageGallery } from "@/components/ui/image-gallery";
import { CtaBanner } from "@/components/ui/cta-banner";
import { ChoiceCard } from "@/components/ui/choice-card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Photo } from "@/components/photo";
import { works } from "@/lib/catalog";
const features = [
  {
    title: "Форма и эргономика",
    description: "Классические линии и индивидуальные изменения",
    icon: <Guitar />,
  },
  {
    title: "Материалы",
    description: "Породы древесины, конструкции корпуса и грифа",
    icon: <Layers />,
  },
  {
    title: "Звук",
    description: "Звукосниматели, схемы, электроника",
    icon: <AudioLines />,
  },
  {
    title: "Гриф",
    description: "Профиль, радиус, накладка, лады",
    icon: <Guitar />,
  },
  {
    title: "Отделка",
    description: "Цвет, фактура, релик, глянец, мат",
    icon: <Palette />,
  },
  {
    title: "Фурнитура",
    description: "Бриджи, колки, страплоки и др.",
    icon: <Settings />,
  },
];
const stages = [
  "Обсуждение идеи",
  "Проект и расчёт",
  "Изготовление",
  "Сборка и настройка",
  "Готовый инструмент",
];
export function Home() {
  const router = useRouter();
  return (
    <main>
      <HeroEditorialSplit />
      <section className="works-section home-works wrap" id="works">
        <div className="section-heading">
          <h2>Гитары из мастерской</h2>
          <p>
            Готовые инструменты JM и реализованные
            <br className="desktop" /> индивидуальные проекты.
          </p>
          <a href="/works">Все работы</a>
        </div>
        <div className="works-grid">
          {works.map((w) => (
            <ProductCard key={w.slug} {...w} href={"/works/" + w.slug} />
          ))}
        </div>
      </section>
      <section className="options-section wrap">
        <div className="section-heading">
          <h2>Что можно изменить в гитаре</h2>
          <p>
            Настраивайте инструмент под себя — от эргономики
            <br className="desktop" /> и звучания до внешнего вида.
          </p>
        </div>
        <FeatureGrid features={features} className="options-grid" />
      </section>
      <section className="dark process-section">
        <div className="wrap process-inner">
          <div>
            <h2>
              Как создаётся
              <br />
              инструмент
            </h2>
            <p>От идеи до готовой гитары — прозрачный и понятный процесс.</p><small className="process-note">На фото — детали готовых работ JM.</small>
          </div>
          <ImageGallery
            images={stages.map((alt, i) => ({
              alt,
              src:
                ["/images/asymmetric.jpg", "/images/green.jpg", "/images/asymmetric.jpg", "/images/black.jpg", "/images/red.jpg"][i],
            }))}
          />
        </div>
      </section>
      <section className="wrap example-section">
        <div>
          <h2>
            Пример проекта:
            <br />
            Красная гитара JM
          </h2>
          <p>
            Одна из работ мастерской. Красная отделка корпуса и головы грифа,
            контрастный тёмный гриф.
          </p>
          <a className="btn cream" href="/works/red">
            Смотреть проект полностью →
          </a>
        </div>
        <Photo
          src="/images/red.jpg"
          alt="Красная гитара JM"
          className="example-photo"
        />
        <div className="project-features">
          <h3>Особенности проекта</h3>
          {works[2].features.map((f) => (
            <p key={f}>
              <Check />
              {f}
            </p>
          ))}
        </div>
        <div className="spec-table">
          <h3>Данные проекта</h3>
          <Table>
            <TableBody>
              {[
                ["Отделка", "Красная"],
                ["Инструмент", "Электрогитара"],
                ["Материалы", "Уточняются"],
                ["Электроника", "Уточняется"],
                ["Мензура и вес", "Уточняются"],
              ].map(([k, v]) => (
                <TableRow key={k}>
                  <TableCell>{k}</TableCell>
                  <TableCell>{v}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="dark workshop-section" id="workshop">
        <div className="wrap">
          <CtaBanner
            title={
              <>
                Мастерская
                <br />
                JM Guitars
              </>
            }
            description="Авторские инструменты, внимание к деталям и личный контроль на каждом этапе."
          >
            <Photo src="/images/asymmetric.jpg" alt="Мастерская JM Guitars" />
            <div className="trust-list">
              {[
                [Star, "Индивидуальный проект", "Обсуждение задач и пожеланий"],
                [Wrench, "Реальные работы", "Инструменты из портфолио JM"],
                [
                  Users,
                  "Диалог с музыкантом",
                  "От идеи до готового инструмента",
                ],
                [
                  Layers,
                  "Внимание к деталям",
                  "Согласование комплектации и отделки",
                ],
              ].map(([Icon, title, text]) => {
                const I = Icon as typeof Star;
                return (
                  <div key={String(title)}>
                    <I />
                    <p>
                      <b>{String(title)}</b>
                      <span>{String(text)}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </CtaBanner>
        </div>
      </section>
      <section className="wrap order-section" id="order">
        <div className="section-heading">
          <h2>Как заказать гитару</h2>
          <p>Три удобных способа начать проект.</p>
        </div>
        <div className="order-choices">
          <ChoiceCard
            icon={<Guitar />}
            title="Выбрать понравившуюся работу"
            description="Из наших работ и реализованных комплектаций"
            onClick={() => router.push("/works")}
          />
          <ChoiceCard
            icon={<Settings />}
            title="Собрать в конфигураторе"
            description="Настроить форму, гриф, комплектацию и подготовить спецификацию"
            onClick={() => router.push("/configurator")}
          />
          <ChoiceCard
            icon={<PenTool />}
            title="Прийти со своей идеей"
            description="Обсудить любую концепцию, включая нестандартные решения"
            onClick={() => router.push("/configurator?idea=1")}
          />
        </div>
      </section>
      <section className="wrap terms-section">
        <h3>Условия и процесс заказа</h3>
        <ol className="order-steps">
          {[
            ["Обсуждение", "Идея, пожелания, возможности"],
            ["Расчёт", "Комплектация и оценка проекта"],
            ["Согласование условий", "Стоимость, сроки и оплата"],
            ["Изготовление", "Работа по согласованному проекту"],
            ["Готовый инструмент", "Настройка и согласование передачи"],
          ].map(([t, d], i) => (
            <li key={t}>
              <span>{i + 1}</span>
              <b>{t}</b>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="dark final-section" id="contacts">
        <Photo
          src="/images/asymmetric.jpg"
          alt="Детали гитары JM"
          className="final-photo"
        />
        <div className="wrap">
          <CtaBanner
            title="Обсудим ваш проект?"
            description="Расскажите о вашем инструменте — поможем подобрать оптимальные решения и обсудим детали."
          >
            <div className="final-actions">
              <a className="btn cream" href="/configurator?idea=1">
                Обсудить свою гитару →
              </a>
              <a className="btn outline" href="/configurator">
                <Settings />
                Перейти в конфигуратор
              </a>
            </div>
            <div className="contact-list">
              <h3>Связаться с нами</h3>
              <p>
                <Send />
                Telegram — уточняется
              </p>
              <p>
                <Mail />
                E-mail — уточняется
              </p>
              <p>
                <Monitor />
                Контакты будут добавлены
              </p>
            </div>
          </CtaBanner>
        </div>
      </section>
    </main>
  );
}
