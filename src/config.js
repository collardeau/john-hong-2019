export const cloudinaryBase = ({ w, h } = { w: 0, h: 0 }) => {
  const width = w ? `w_${w},` : ""; // todo: round up?
  const height = h ? `h_${h},` : "";
  return `https://res.cloudinary.com/dqnk3lc1i/image/fetch/${width}${height}f_auto/https://cranky-meninsky-867b19.netlify.com/`;
};
