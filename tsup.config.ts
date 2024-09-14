import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm","cjs"],
  entry: ["./src/index.ts"],
  dts: true,
  metafile:true,
  target:"es2020",
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
