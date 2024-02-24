import { lazy } from "react";

const NotFoundPageLazy = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        resolve(import("./NotFoundPage"));
      }, 1500);
    }),
);

export default NotFoundPageLazy;
