export function makeCols(items = [], category = "") {
  const half = Math.ceil(items.length / 2);
  const cols = items.reduce(
    (acc, next, i) => {
      const [col1, col2] = acc;
      if (category === "work on paper") {
        // move piece before half to second col
        if (i === half - 1) return [[...col1], [...col2, next]];
      }
      if ((i + 2) % 2) {
        return [[...col1], [...col2, next]];
      } else {
        return [[...col1, next], [...col2]];
      }
    },
    [[], []]
  );
  return cols;
}
