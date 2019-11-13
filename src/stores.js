import { writable, derived } from "svelte/store";

function createObject(key = "id") {
  const { subscribe, update } = writable({});
  return {
    subscribe,
    merge: items => {
      if (Array.isArray(items)) {
        update(old => ({
          ...old,
          ...items.reduce(
            (acc, next) => ({
              ...acc,
              [next[key]]: next
            }),
            {}
          )
        }));
      } else {
        console.warn("you didn't pass an array to createObject");
      }
    }
  };
}

function createMaxWidth() {
  const { subscribe, update } = writable(0);
  return {
    subscribe,
    change: w => {
      update(old => {
        let res = old && old < 640 && w < 640 ? old : w;
        return res;
      });
    }
  };
}

export const maxWidth = createMaxWidth();
export const artStore = createObject("slug");

let cachedWidths = {};
function getImgWidth(containerW = 0, art = {}) {
  const { slug, imgW } = art;
  const cached = cachedWidths[slug];
  if (cached && containerW < cached) return cached;
  const idealW = containerW <= 414 ? 414 : containerW <= 640 ? 640 : imgW;
  const w = imgW < idealW ? imgW : idealW;
  cachedWidths[slug] = w;
  return w;
}

const local = false;
const home = "https://john-hong-studio.com";
const cloudinary = "https://res.cloudinary.com/dqnk3lc1i/image/fetch/";

export const images = derived(
  [artStore, maxWidth],
  ([$artStore, $maxWidth]) => {
    let all = {};
    Object.keys($artStore).forEach(key => {
      const art = $artStore[key];
      const reqW = getImgWidth($maxWidth, art);
      const transform = reqW >= art.imgW ? "" : `w_${reqW},`;
      if (local) return (all[key] = { url: art.img, w: reqW, transform });
      const url = `${cloudinary}${transform}f_auto/${home}/${art.img}`;
      all[key] = { url, w: reqW, transform };
    });
    return all;
  }
);
