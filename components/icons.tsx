import {
  Recycle,
  Globe2,
  Building2,
  Briefcase,
  Users,
  Lightbulb,
  RefreshCw,
  Armchair,
  Flower2,
  Palette,
  Ruler,
  LucideIcon,
} from "lucide-react";

export const iconMap = {
  recycle: Recycle,
  globe: Globe2,
  building: Building2,
  briefcase: Briefcase,
  users: Users,
  lightbulb: Lightbulb,
  refresh: RefreshCw,
  chair: Armchair,
  flower: Flower2,
  palette: Palette,
  ruler: Ruler,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  const Component = iconMap[name];
  return <Component className={className} strokeWidth={1.75} />;
}
