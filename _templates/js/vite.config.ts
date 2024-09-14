// @ts-check
import { defineConfig } from "vite";
import NoorJs from "@noorjs/vite";

/**
 * @type { import('vite').UserConfig }
 * @type { import('@noorjs/core') }
*/

export default defineConfig({
  plugins: [NoorJs()],
});
