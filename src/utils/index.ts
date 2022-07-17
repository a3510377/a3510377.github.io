/** delay */
export const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const deepCopy = <T extends object | Array<unknown>>(data: T): T =>
  JSON.parse(JSON.stringify(data));
