import { Icon } from "@/components/icons";
import { ProductCategory } from "@/lib/site-config";

export function ProductCard({
  category,
  index = 0,
}: {
  category: ProductCategory;
  index?: number;
}) {
  const accent = index % 2 === 0 ? "forest" : "clay";

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/15 hover:shadow-xl hover:shadow-ink/5">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
          accent === "forest" ? "bg-forest/8 text-forest" : "bg-clay/10 text-clay-dark"
        }`}
      >
        <Icon name={category.icon} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-ink">{category.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">
        {category.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <li
            key={item}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              accent === "forest" ? "bg-forest/8 text-forest" : "bg-clay/10 text-clay-dark"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
