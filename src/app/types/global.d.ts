declare module "*.scss" {
  const classNames: Record<string, string>;
  export = classNames;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.woff2";
declare module "*.woff";

declare const IS_DEV: boolean;
