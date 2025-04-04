import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-profile-list",
            entry: "ilw-profile-list.js",
            fileName: "ilw-profile-list",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-profile-list.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
