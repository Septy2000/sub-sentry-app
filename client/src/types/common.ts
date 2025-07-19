// Common types
export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface Stat {
    number: string;
    label: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface Step {
    number: number;
    title: string;
    description: string;
}

// Button types
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type ContainerSize = "sm" | "md" | "lg" | "xl";
