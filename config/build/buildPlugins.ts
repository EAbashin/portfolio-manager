import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/config";

export function buildPlugins(paths: BuildPaths): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
  ];
}
