import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    base: "/cs32-mock-deployed/",
    build: {
      outDir: "build",
    },
    plugins: [react()],
    server: {
      port: 8000,
    },
    test: {
      exclude: ["**/e2e/**", "**/node_modules/**"],
    },
  };
});
