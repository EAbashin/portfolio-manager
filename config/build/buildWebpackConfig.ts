import type {Configuration} from "webpack";
import type {BuildOptions} from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash:8].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths, isDev),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(paths),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
