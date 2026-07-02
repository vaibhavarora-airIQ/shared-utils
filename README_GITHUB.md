# My Shared Utils

A collection of utility functions and React components for frontend monorepo setups.

## 🚀 Installation

### From GitHub (recommended for monorepo setup)

```bash
npm install github:YOUR_USERNAME/my-shared-utils#main
```

### From npm registry (if published)

```bash
npm install my-shared-utils
```

## 📦 What's Included

### Utility Functions
- **String utilities**: capitalize, truncate, slugify
- **Array utilities**: unique, chunk  
- **Number utilities**: clamp, randomInt
- **Date utilities**: formatDate, isWeekend
- **Validation utilities**: isValidEmail, isValidUrl

### React Components
- **Card**: Container component with variants (default, elevated, outlined)
- **Button**: Interactive button with variants and sizes
- **Badge**: Status indicator with color variants

## 💻 Usage

### Utility Functions

```typescript
import { capitalize, isValidEmail, formatDate } from 'my-shared-utils';

// String utilities
capitalize('hello'); // 'Hello'
truncate('This is a long string', 10); // 'This is a...'

// Validation
isValidEmail('test@example.com'); // true
isValidEmail('invalid-email'); // false

// Date utilities
formatDate(new Date()); // '2024-01-15'
```

### React Components

```typescript
import { Card, Button, Badge } from 'my-shared-utils';

function MyComponent() {
  return (
    <Card title="My Card" variant="elevated">
      <p>Content here</p>
      <Button onClick={handleClick}>Action</Button>
      <Badge variant="success">New</Badge>
    </Card>
  );
}
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Prepare for publishing
npm run prepublishOnly
```

## 📝 Publishing to GitHub

1. Push this repository to GitHub
2. Tag your releases: `git tag v1.0.0 && git push --tags`
3. Install in consumer apps: `npm install github:YOUR_USERNAME/my-shared-utils#v1.0.0`

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
