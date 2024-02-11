declare module "*.scss" {
  const classNames: { [className: string]: string };
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

declare const __IS_DEV__: boolean;
