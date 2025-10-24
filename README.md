# Module Federation Manifest Files

## File Structure

```
public/
├── module-federation.manifest.json       # Development (default)
└── module-federation.manifest.prod.json  # Production
```

## How It Works

Simple approach:

- **Development**: `npm start` → Uses `manifest.json` (no replacement)
- **Production**: `npm run build:prod` → Replaces with `manifest.prod.json`

## Configuration

File replacement only for production in `project.json`:

```json
{
  "configurations": {
    "production": {
      "fileReplacements": [
        {
          "replace": "public/module-federation.manifest.json",
          "with": "public/module-federation.manifest.prod.json"
        }
      ]
    }
  }
}
```

## Usage

### Development (localhost remotes)

```bash
npm start
# Uses manifest.json as-is
# Expects remotes at localhost:4201-4207
```

### Production (deployed remotes)

```bash
npm run build:prod
# Replaces manifest.json with manifest.prod.json
# Points to https://hemantajax.github.io/mfedemos/*
```

## Adding New Environments

To add a staging environment:

1. **Create manifest**:

   ```bash
   cp module-federation.manifest.prod.json module-federation.manifest.staging.json
   # Edit with staging URLs
   ```

2. **Add to `project.json`**:

   ```json
   "staging": {
     "fileReplacements": [
       {
         "replace": "public/module-federation.manifest.json",
         "with": "public/module-federation.manifest.staging.json"
       }
     ]
   }
   ```

3. **Build for staging**:
   ```bash
   nx build dashboard --configuration=staging
   ```

## Why `public/` Folder?

- ✅ Standard location for static assets in Angular/Nx
- ✅ Files copied directly to output without processing
- ✅ Accessible via root path: `/module-federation.manifest.json`
- ✅ Works with fileReplacements

## Manifest Format

```json
{
  "remoteName": "http://base-url-only"
}
```

**Important**: Use base URL only, not full path to `remoteEntry.mjs`!

❌ Wrong: `"https://example.com/remoteEntry.mjs"`  
✅ Correct: `"https://example.com"`

Nx's `loadRemoteModule()` adds the correct entry point automatically.
