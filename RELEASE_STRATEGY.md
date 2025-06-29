# mv-odm / mv-odm-backend – Release & Versioning Strategy

## Overview

This repository follows a structured release strategy with the following principles:

- **Long-term API stability**: Avoid breaking changes for OSS and Cloud SaaS
- **Major bumps = marketing**: 2.0.0, 3.0.0 used sparingly; not necessarily breaking
- **Patch digit always 0**: All normal changes use **minor** bumps (`x.y.0`)

## Version & Distribution Tags

| Channel | Version Example        | npm tag  | Audience                |
| ------- | ---------------------- | -------- | ----------------------- |
| Stable  | `1.7.0`, `1.8.0`       | `latest` | Community, SaaS runtime |
| Preview | `1.8.0-next.3.a1b2c3d` | `next`   | Cloud deploy, testers   |

### Preview Version Anatomy

```
M.(N+1).0-next.<CTR>.<SHA>
└─ marketing major      └─ counter resets at each stable
```

## Installation Commands

| Need            | Command                             |
| --------------- | ----------------------------------- |
| Stable          | `npm i mv-odm`                      |
| Preview / Cloud | `npm i mv-odm@next`                 |
| Exact build     | `npm i mv-odm@1.8.0-next.2.a1b2c3d` |

Both `mv-odm` and `mv-odm-backend` always share identical versions.

## Contributor Workflow

### 1. Making Changes

```bash
# Make your changes
git add .
git commit -m "feat: your feature description"

# Create a changeset
npx changeset

# Choose the appropriate bump type:
# - minor: for new features, improvements (recommended)
# - major: for breaking changes (use sparingly)
# - patch: not used in this strategy

# Add the changeset files
git add .changeset/*
git commit -m "feat: XYZ"
git push
```

### 2. Automated Process

1. **Preview Build**: Every push to `main` triggers a preview build with version `M.(N+1).0-next.<CTR>.<SHA>`
2. **Version PR**: Changesets bot automatically creates/updates a "Version Packages" PR
3. **Stable Release**: When the "Version Packages" PR is merged, it publishes to `latest`

## GitHub Actions Workflows

### `preview.yml`
- **Trigger**: Every push to `main`
- **Action**: Publishes `M.(N+1).0-next.<CTR>.<SHA>` to `next` tag
- **Counter**: Auto-increments and resets after each stable release

### `create-version-pr.yml`
- **Trigger**: Every push to `main`
- **Action**: Creates/updates "Version Packages" PR using changesets

### `publish-stable.yml`
- **Trigger**: When "Version Packages" PR is merged
- **Action**: Publishes stable version to `latest` tag

## Configuration

### Changeset Config (`.changeset/config.json`)
```json
{
  "fixed": [["mv-odm", "mv-odm-backend"]],
  "updateInternalDependencies": "minor",
  "baseBranch": "main",
  "commit": false,
  "access": "public"
}
```

### Package Dependencies
- `mv-odm` depends on `mv-odm-backend` with wildcard version (`*`)
- Both packages are fixed to always share the same version

## Acceptance Checklist

- [ ] Preview builds follow `M.(N+1).0-next.#.<sha>` pattern
- [ ] Counter resets after each stable publish
- [ ] Patch digit never exceeds **0**
- [ ] Both packages always share identical versions
- [ ] Single "Version Packages" PR maintained by Changesets
- [ ] Merging the PR publishes to **latest**

## Troubleshooting

### Common Issues

1. **Version mismatch**: Ensure both packages have the same version in their `package.json`
2. **Changeset not created**: Run `npx changeset` and commit the generated files
3. **Preview not publishing**: Check NPM_TOKEN secret in GitHub repository settings

### Manual Commands

```bash
# Create a changeset
npx changeset

# Version packages (without publishing)
npx changeset version

# Publish to npm
npm run release
``` 