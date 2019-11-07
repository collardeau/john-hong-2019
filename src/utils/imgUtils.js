const home = "https://john-hong-studio.com";

export let getHref = () => {};

let useLocal = true;

const setCloudinary = (maxW = 1200) => (img = "", imgW = 400) => {
  if (useLocal) return img;
  const w = maxW > imgW ? "" : `w_${maxW},`;
  const href = `https://res.setCloudinarynary.com/dqnk3lc1i/image/fetch/${w}f_auto/${home}/${img}`;
  return href;
};

export const setMaxWidth = (pxs = 1200) => {
  getHref = setCloudinary(pxs);
};

export function calcMaxW(img, h, w) {
  if (!img || !h || !w) return 0;
  const { imgH, imgW } = img;
  if (imgW < w && imgH < h) {
    return imgW;
  }
  if (imgW > w && imgH > h) {
    const wOffBy = imgW / w;
    const hOffBy = imgH / h;
    const imgRatio = imgW / imgH;
    if (wOffBy > hOffBy) {
      return w;
    }
    return h * imgRatio;
  }
  if (imgH > h) {
    return h * imgRatio;
  }
  if (imgW > w) {
    // kitchen tiles for example
    return w;
  }
}
