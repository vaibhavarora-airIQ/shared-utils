"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Card = ({ title, children, footer, className = '', variant = 'default' }) => {
    const baseStyles = 'rounded-lg p-6 transition-all duration-200';
    const variantStyles = {
        default: 'bg-white shadow-md',
        elevated: 'bg-white shadow-lg',
        outlined: 'bg-white border-2 border-gray-200'
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: `${baseStyles} ${variantStyles[variant]} ${className}`, children: [title && ((0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-4 text-gray-800", children: title })), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-600", children: children }), footer && ((0, jsx_runtime_1.jsx)("div", { className: "mt-4 pt-4 border-t border-gray-200", children: footer }))] }));
};
exports.Card = Card;
