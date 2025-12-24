import react from "@vitejs/plugin-react";
import path from "path";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    dts({
      pathsToAliases: true,
      tsconfigPath: "./tsconfig.json",
      insertTypesEntry: true,
      include: ["src/**"],
      exclude: [
        "**/__tests__/**",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.spec.ts",
        "**/*.spec.tsx",
      ],
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ReactDndBoard",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "@hello-pangea/dnd"],
      output: {
        assetFileNames: "style.css",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@hello-pangea/dnd": "HelloPangeaDnd",
        },
      },
    },
  },
});
