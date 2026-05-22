import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({
      reactCompiler: true,
    } as any),
    svgr({ include: "**/*.svg?react" }),
  ],
});
