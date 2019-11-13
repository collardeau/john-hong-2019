export function calcMaxW(img, h, w) {
  if (!img || !h || !w) return 0;
  const { imgH, imgW } = img;
  if (imgW < w && imgH < h) {
    // console.log('image is smaller on both sides)
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
    // kitchen tiles for example
    // console.log("only the width is bigger");
    return w;
  }
}
