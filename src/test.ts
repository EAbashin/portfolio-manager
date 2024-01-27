export const someFn = (n: number): string => {
  for (let index = 0; index < n; index++) {
    console.log("some function");
  }

  document.body.innerHTML = `<div>HELLO WORLD</div>`;

  return "number";
};
