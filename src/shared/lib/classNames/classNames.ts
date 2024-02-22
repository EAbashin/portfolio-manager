export type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
  cls: string,
  additional: string[] = [],
  mods: Mods = {},
): string => {
  const modClasses: string[] = Object.entries(mods)
    .filter(([_className, value]) => value)
    .map(([className]) => className);

  return [cls, ...additional.filter(Boolean), ...modClasses].join(" ");
};
