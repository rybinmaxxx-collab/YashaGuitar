import { works } from "@/lib/catalog";
import { ProductCard } from "@/components/ui/product-card";
export default function Works() {
  return (
    <main className="wrap inner-page">
      <p className="eyebrow">Мастерская JM Guitars</p>
      <h1>Наши работы</h1>
      <p>
        Индивидуальные инструменты из предоставленных фотографий. Подписи
        описывают внешний вид, а не официальные названия моделей.
      </p>
      <div className="works-grid catalog-grid">
        {works.map((w) => (
          <ProductCard key={w.slug} {...w} href={"/works/" + w.slug} />
        ))}
      </div>
    </main>
  );
}
