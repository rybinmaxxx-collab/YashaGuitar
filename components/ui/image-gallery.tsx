// Adapted from MiniDev UI 0.6.0, MIT. No demo imagery.
import { Photo } from "@/components/photo";
export function ImageGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div data-slot="image-gallery" className="process-gallery">
      {images.map((im, i) => (
        <div className="process-card" key={im.alt}>
          <Photo src={im.src} alt={im.alt} />
          <div>
            <b>{String(i + 1).padStart(2, "0")}</b>
            <h3>{im.alt}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
