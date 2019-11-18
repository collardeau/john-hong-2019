export function calcMaxW(img = { imgH: 0, imgW: 0 }, h, w) {
  const { imgH, imgW } = img;
  if (!imgH || !imgW || !h || !w) return 0;
  if (imgW < w && imgH < h) {
    return imgW;
  }
  const imgRatio = imgW / imgH;
  if (imgW > w && imgH > h) {
    // console.log("the image is bigger than the available space on both sides");
    const wOffBy = imgW / w;
    const hOffBy = imgH / h;
    if (wOffBy > hOffBy) {
      // console.log("width is bigger offender");
      return w;
    }
    // console.log("height is bigger offender");
    return h * imgRatio;
  }
  if (imgH > h) {
    // console.log("only the height of the image is bigger");
    return h * imgRatio;
  }
  if (imgW > w) {
    // kitchen styles for example, young john on mobile
    return w > 1024 ? 1024 : w;
  }
}

export function remToPxs(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
