let anything: any;
anything = "s";

const kgToGram = (input: string | number): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value, unit] = input.split(" ");
    return `Converted output: ${Number(value) * 1000} `;
  }
};
const result1 = kgToGram(10);
console.log({ result1 });
const result2 = kgToGram("10 kg");
console.log({ result2 });
