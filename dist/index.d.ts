/**
 * String utilities
 */
export declare const capitalize: (str: string) => string;
export declare const truncate: (str: string, length: number) => string;
export declare const slugify: (str: string) => string;
/**
 * Array utilities
 */
export declare const unique: <T>(arr: T[]) => T[];
export declare const chunk: <T>(arr: T[], size: number) => T[][];
/**
 * Number utilities
 */
export declare const clamp: (num: number, min: number, max: number) => number;
export declare const randomInt: (min: number, max: number) => number;
/**
 * Date utilities
 */
export declare const formatDate: (date: Date, format?: string) => string;
export declare const isWeekend: (date: Date) => boolean;
/**
 * Validation utilities
 */
export declare const isValidEmail: (email: string) => boolean;
export declare const isValidUrl: (url: string) => boolean;
/**
 * React Components
 */
export { Card } from "./components/Card";
export type { CardProps } from "./components/Card";
export { Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";
export { Badge } from "./components/Badge";
export type { BadgeProps } from "./components/Badge";
