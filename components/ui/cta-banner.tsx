// Adapted from MiniDev UI 0.6.0, MIT; custom slots preserve the approved three-column layout.
import type { ReactNode } from "react";
export function CtaBanner({
  title,
  description,
  children,
  className = "",
}: {
  title: ReactNode;
  description: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div data-slot="cta-banner" className={"cta-banner " + className}>
      <div className="cta-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
