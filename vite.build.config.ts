import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-profile-list",
            entry: "ilw-profile-list.ts",
            fileName: "ilw-profile-list",
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-profile-list.css";
                    return "[name][extname]";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
