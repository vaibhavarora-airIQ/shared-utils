# My Shared Utils

A collection of utility functions for frontend applications.

## Installation

### From GitHub (recommended for monorepo setup)

```bash
npm install github:your-username/my-shared-utils
```

### From npm registry (if published)

```bash
npm install my-shared-utils
```

## Usage

```typescript
import { capitalize, truncate, isValidEmail } from 'my-shared-utils';

// String utilities
capitalize('hello'); // 'Hello'
truncate('This is a long string', 10); // 'This is a...'

// Validation
isValidEmail('test@example.com'); // true
isValidEmail('invalid-email'); // false
```

## Available Utilities

### String Utilities
- `capitalize(str)` - Capitalize first letter
- `truncate(str, length)` - Truncate string with ellipsis
- `slugify(str)` - Convert string to URL-friendly slug

### Array Utilities
- `unique(arr)` - Remove duplicates
- `chunk(arr, size)` - Split array into chunks

### Number Utilities
- `clamp(num, min, max)` - Clamp number between min and max
- `randomInt(min, max)` - Generate random integer

### Date Utilities
- `formatDate(date, format)` - Format date string
- `isWeekend(date)` - Check if date is weekend

### Validation Utilities
- `isValidEmail(email)` - Validate email format
- `isValidUrl(url)` - Validate URL format

## Development

```bash
# Install dependencies
npm install

# Build
npm run build
```

## Publishing

To use this package via GitHub URL, make sure to:
1. Push this repository to GitHub
2. Tag your releases: `git tag v1.0.0 && git push --tags`
3. Install in consumer apps: `npm install github:your-username/my-shared-utils#v1.0.0`
