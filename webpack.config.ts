import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, "src"),
    build: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const port = env.port || 3000;

  const isDev = mode === "development";

  return buildWebpackConfig({ mode, port, paths, isDev });
};
