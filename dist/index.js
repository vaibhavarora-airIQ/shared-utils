"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = exports.Button = exports.Card = exports.isValidUrl = exports.isValidEmail = exports.isWeekend = exports.formatDate = exports.randomInt = exports.clamp = exports.chunk = exports.unique = exports.slugify = exports.truncate = exports.capitalize = void 0;
/**
 * String utilities
 */
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitalize = capitalize;
const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
};
exports.truncate = truncate;
const slugify = (str) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
};
exports.slugify = slugify;
/**
 * Array utilities
 */
const unique = (arr) => {
    return Array.from(new Set(arr));
};
exports.unique = unique;
const chunk = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};
exports.chunk = chunk;
/**
 * Number utilities
 */
const clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
};
exports.clamp = clamp;
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.randomInt = randomInt;
/**
 * Date utilities
 */
const formatDate = (date, format = "YYYY-MM-DD") => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return format
        .replace("YYYY", String(year))
        .replace("MM", month)
        .replace("DD", day);
};
exports.formatDate = formatDate;
const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
};
exports.isWeekend = isWeekend;
/**
 * Validation utilities
 */
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
exports.isValidEmail = isValidEmail;
const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    }
    catch {
        return false;
    }
};
exports.isValidUrl = isValidUrl;
/**
 * React Components
 */
var Card_1 = require("./components/Card");
Object.defineProperty(exports, "Card", { enumerable: true, get: function () { return Card_1.Card; } });
var Button_1 = require("./components/Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
var Badge_1 = require("./components/Badge");
Object.defineProperty(exports, "Badge", { enumerable: true, get: function () { return Badge_1.Badge; } });
