import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
export default defineConfig([
  {
    extends: [...next],
  },
  { ignores: [".next/**", ".next-production/**", ".qa/**", "scripts/*.cjs", "public/_launchfolio/**"] },
]);
