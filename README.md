# Repro - Importing TSX files breaks JSX options

This repo is a minimal reproduction of a bug in `esbuild-ts-paths` where importing TSX files via paths.

This original issue can be found [here](https://github.com/frankleng/esbuild-ts-paths/issues/8).

## Requirements

-   Node.js 14.13.0+ (we need ESM support; we could compile with ESBuild using a CommonJS script, but that's not the point of this repo)

## Steps to reproduce

1. Clone this repo

```bash
git clone https://github.com/Ascor8522/repro-esbuild-ts-paths-8.git
```

---

2. Install the dependencies

```bash
npm install
```

---

3. Build the code

```
npm run build
```

This will generate two builds, one with `esbuild-ts-paths` (`dist/paths.mjs`) and one without (`dist/nopaths.mjs`).

---

4. Run and compare the results

```bash
npm run nopaths
```

👆 Everything runs just be fine. The code prints `<div>Hello from Preact !</div>`.

---

```bash
npm run paths
```

👆 Error: `ReferenceError: React is not defined`.

Of course, since React isn't installed. Instead, I chose to use Preact, which should mostly be a drop-in replacement.

Somehow, the settings in my `tsconfig.json` are being ignored or overwritten when using `esbuild-ts-paths`.
The JSX is being compiled to `React.createElement` instead of `h` as specified in the `tsconfig.json`.
