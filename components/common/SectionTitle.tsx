import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export default function SectionTitle({
  title,
  subtitle,
  action,
}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}