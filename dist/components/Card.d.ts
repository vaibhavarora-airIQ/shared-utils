import React from 'react';
export interface CardProps {
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    variant?: 'default' | 'elevated' | 'outlined';
}
export declare const Card: React.FC<CardProps>;
