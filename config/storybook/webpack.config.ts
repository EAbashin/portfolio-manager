import path from "path";
import type { Configuration, RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: Configuration }): Configuration => {
  config.resolve?.modules?.push(path.resolve(__dirname, "..", "..", "src"));
  config.resolve?.extensions?.push(".ts", ".tsx");

  if (config.module === undefined) {
    return config;
  }
  config.module.rules?.push(buildCssLoader(true));
  config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
    if (rule.test instanceof RegExp && rule.test.test(".svg")) {
      return { ...rule, exclude: /\.svg$/ };
    }
    return rule;
  });

  config.module?.rules?.push(buildSvgLoader());

  return config;
};
