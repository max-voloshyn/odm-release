# ODM Release Monorepo

This is a JavaScript monorepo using npm workspaces containing two packages:

- **odm-backend**: Backend service package
- **odm**: Facade package that depends on odm-backend

## Structure

```
odm-release/
├── package.json              # Root workspace configuration
├── packages/
│   ├── odm-backend/          # Backend package
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       └── index.ts
│   └── odm/                  # Frontend package
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           └── index.ts
└── README.md
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build all packages:
   ```bash
   npm run build
   ```

## Package Versions

Both packages are currently at version `0.0.0` as requested.

## Workspace Commands

- `npm run build` - Build all packages
- `npm run clean` - Clean build artifacts from all packages

## Development

To work on a specific package:

```bash
cd packages/odm-backend
npm run build
```

Or from the root:

```bash
npm run build --workspace=odm-backend
``` 