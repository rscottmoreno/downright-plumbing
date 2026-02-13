import {
  Wrench,
  Droplet,
  Flame,
  AlertCircle,
  Trash2,
  Thermometer,
  Zap,
  Search,
  Factory,
  Waves,
  Bath,
  UtensilsCrossed,
  Delete,
  Toilet,
  Droplets,
  Wind,
  Shield,
  Building2,
  ClipboardCheck,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Droplet,
  Flame,
  AlertCircle,
  Trash2,
  Thermometer,
  Zap,
  Search,
  Factory,
  Waves,
  Bath,
  UtensilsCrossed,
  Delete,
  Toilet,
  Droplets,
  Wind,
  Shield,
  Building2,
  ClipboardCheck,
};

export function getIconComponent(iconName: string): LucideIcon {
  return iconMap[iconName] || Wrench; // Default to Wrench if icon not found
}
