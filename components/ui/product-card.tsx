// Adapted from MiniDev UI 0.6.0, MIT; photograph and title are a single accessible link.
import { Photo } from "@/components/photo";
export function ProductCard({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <a data-slot="product-card" className="work-card" href={href}>
      <Photo src={image} alt={title} />
      <div className="work-caption">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}
