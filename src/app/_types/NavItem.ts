import { ReactNode } from "react";

export type NavItemValue = "main" | "about" | "skill" | "project" | "contact";
export interface NavItem {
  name: string;
  value: NavItemValue;
  onClick: () => void;
  icon: ReactNode;
}
