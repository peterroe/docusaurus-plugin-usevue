import { terser } from "rollup-plugin-terser";

export default {
    input: "./index.js",
    output: {
        file: 'dist/usevue.cjs.js',
        format: "cjs",
    },
    plugins: [
        terser({ compress: { drop_console: true } })
    ]
}