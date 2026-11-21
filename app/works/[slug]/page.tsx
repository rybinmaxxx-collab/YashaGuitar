import { notFound } from "next/navigation";
import { works } from "@/lib/catalog";
import { Photo } from "@/components/photo";
export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}
export default async function Work({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = works.find((w) => w.slug === slug);
  if (!w) notFound();
  return (
    <main className="wrap inner-page">
      <a href="/works">Все работы</a>
      <div className="project-detail">
        <Photo src={w.image} alt={w.title} />
        <div>
          <p className="eyebrow">Работа мастерской</p>
          <h1>{w.title}</h1>
          <p>{w.description}</p>
          <ul>
            {w.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="note">
            Название описательное. Породы древесины, звукосниматели, мензура,
            вес и другие технические данные требуют подтверждения мастером.
          </p>
          <a className="btn cream" href={"/configurator?reference=" + w.slug}>
            Взять за основу проекта →
          </a>
        </div>
      </div>
    </main>
  );
}
