type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional?: string[],
): string {
  const modClasses: string[] = Object.entries(mods)
    .filter(([_className, value]) => value)
    .map(([className]) => className);

  return [cls, ...additional, ...modClasses].join(" ");
}
