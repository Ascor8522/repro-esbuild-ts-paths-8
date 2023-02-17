import * as esbuild from "esbuild";
import esbuildTsPaths from "esbuild-ts-paths";

/**
 * Common options for both builds
 * @type {import("esbuild").BuildOptions}
 */
const commonOptions = {
	bundle: true,
	outdir: "./dist",
	outExtension: { ".js": ".mjs" },
	platform: "node",
	target: "node18",
	tsconfig: "./tsconfig.json",
	loader: {
		".ts": "ts",
		".tsx": "tsx",
	},
	format: "esm",
	packages: "external",
};

await Promise
	.resolve()
	.then(_ => console.log("Starting build"))
	.then(_ => esbuild
		.build({
			...commonOptions,
			entryPoints: ["./src/nopaths.tsx"],
			plugins: [],
		}))
	.then(_ => esbuild
		.build({
			...commonOptions,
			entryPoints: ["./src/paths.tsx"],
			plugins: [
				esbuildTsPaths("./tsconfig.json"), // only difference lies here where we use `esbuild-ts-paths` and use paths
			],
		}))
	.then(_ => console.log("Build complete"))
	.catch(err => {
		console.log("Build failed");
		console.error(err.errors);
		process.exit(-1);
	});
