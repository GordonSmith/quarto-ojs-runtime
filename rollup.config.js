import {terser} from "rollup-plugin-terser";
import * as meta from "./package.json";

const config = {
  input: "src/index.js",
  external: Object.keys(meta.dependencies || {}).filter(key => /^d3-/.test(key)),
  output: {
    file: "dist/quarto-ojs-runtime.js",
    name: "quarto",
    format: "esm",
    indent: false,
    extend: true,
    banner: `// ${meta.name} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`,
    globals: ["$", "Shiny"]
  },
  plugins: []
};

export default [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: `dist/quarto-ojs-runtime.min.js`
    },
    plugins: [
      ...config.plugins,
      terser({
        output: {
          preamble: config.output.banner
        },
        mangle: {
          reserved: ["RequireError"]
        }
      })
    ]
  }
];
