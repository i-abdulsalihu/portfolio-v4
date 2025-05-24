import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}

export function groupStacksByCategory(stacks: InventoryProps[]) {
  const grouped: Record<string, InventoryProps[]> = {};

  for (const stack of stacks) {
    if (!grouped[stack.category]) {
      grouped[stack.category] = [];
    }
    grouped[stack.category].push({
      label: stack.label,
      description: stack.description,
      icon: stack.icon,
      url: stack.url,
      category: stack.category,
    });
  }

  return Object.entries(grouped).map(([category, stacks]) => ({
    category,
    stacks,
  }));
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
