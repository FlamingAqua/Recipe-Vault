import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function PageContainer({
  title,
  description,
  children,
}: Props) {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="mb-10">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold">
          {title}
        </h1>

        {description && (
          <p className="mt-3 text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {children}
    </main>
  );
}