"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Props = {
  veg: number;
  nonVeg: number;
  desserts: number;
};

const COLORS = [
  "#22c55e",
  "#ef4444",
  "#f59e0b",
];

export default function RecipeAnalytics({
  veg,
  nonVeg,
  desserts,
}: Props) {
  const data = [
    {
      name: "Veg",
      value: veg,
    },
    {
      name: "Non Veg",
      value: nonVeg,
    },
    {
      name: "Dessert",
      value: desserts,
    },
  ];

  return (
    <section className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Recipe Distribution</h2>
          <p className="text-sm text-muted-foreground">
            Visualize your collection at a glance.
          </p>
        </div>
        <div className="rounded-3xl bg-white/10 px-4 py-2 text-sm text-muted-foreground">
          Total slices: {veg + nonVeg + desserts}
        </div>
      </div>

      <div className="mt-6 h-80 rounded-[1.75rem] bg-slate-50 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="flex items-center gap-2 rounded-2xl bg-muted/80 px-4 py-3 text-sm">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          Veg
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-muted/80 px-4 py-3 text-sm">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          Non Veg
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-muted/80 px-4 py-3 text-sm">
          <div className="h-3 w-3 rounded-full bg-amber-500" />
          Dessert
        </div>
      </div>
    </section>
  );
}