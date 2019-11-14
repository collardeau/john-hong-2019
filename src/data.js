const posts = [
  {
    title: "Empress",
    slug: "empress",
    height: 30,
    width: 48,
    materials: "mixed media on canvas",
    img: "art/empress.jpg",
    imgH: 532,
    imgW: 850,
    group: "mixed"
  },
  {
    title: "The Nine",
    slug: "the-nine",
    height: 42,
    width: 64,
    materials: "mixed media on canvas",
    img: "img/the-nine.jpg",
    imgH: 487,
    imgW: 488,
    group: "mixed"
  },
  {
    title: "The Bridge",
    slug: "the-bridge",
    height: 42,
    width: 64,
    materials: "mixed media on canvas",
    img: "art/the-bridge.jpg",
    imgH: 557,
    imgW: 850,
    group: "mixed"
  },

  {
    title: "Mark At The Gate",
    slug: "mark-at-the-gate",
    height: 40,
    width: 40,
    materials: "mixed media on canvas",
    img: "art/mark-at-the-gate.jpg",
    imgH: 850,
    imgW: 843,
    group: "mixed"
  },
  {
    title: "Window",
    slug: "window",
    height: 38,
    width: 38,
    materials: "mixed media on canvas",
    imgH: 559,
    imgW: 559,
    img: "img/window.jpg",
    group: "mixed"
  },
  {
    title: "Neo",
    slug: "neo",
    height: 28,
    width: 44,
    materials: "mixed media on canvas",
    imgH: 540,
    imgW: 850,
    img: "art/neo.jpg",
    group: "mixed"
  },
  // {
  //   title: "All The Tea In China",
  //   slug: "all-the-tea-in-china",
  //   height: 38,
  //   width: 38,
  //   materials: "mixed media on canvas",
  //   img: "art/all-the-tea-in-china.jpg",
  //   imgH: ,
  //   imgW: ,
  //   group: "mixed"
  // },
  {
    title: "Riff",
    slug: "riff",
    height: 42,
    width: 42,
    materials: "mixed media on canvas",
    img: "art/riff.jpg",
    imgH: 850,
    imgW: 864,
    group: "mixed"
  },
  {
    title: "Mimic",
    slug: "mimic",
    height: 40,
    width: 40,
    materials: "mixed media on canvas",
    img: "art/mimic.jpg",
    imgH: 850,
    imgW: 850,
    group: "mixed"
  },
  {
    title: "Backstage",
    slug: "backstage",
    height: 28,
    width: 70,
    materials: "mixed media on panel",
    img: "art/backstage.jpg",
    imgH: 332,
    imgW: 1024,
    group: "mixed"
  },
  {
    title: "Garden",
    slug: "garden",
    height: 24,
    width: 30,
    materials: "mixed media on panel",
    img: "img/garden.jpg",
    imgH: 400,
    imgW: 499,
    group: "mixed"
  },
  {
    title: "Rain",
    slug: "rain",
    height: 78,
    width: 78,
    materials: "mixed media on canvas",
    img: "img/rain.jpg",
    imgH: 512,
    imgW: 518,
    group: "mixed"
  },
  {
    title: "Kiss",
    slug: "kiss",
    height: 52,
    width: 52,
    materials: "mixed media on canvas",
    img: "img/kiss.jpg",
    imgH: 512,
    imgW: 553,
    group: "mixed"
  },
  {
    title: "Family Mandala",
    slug: "family",
    height: 54,
    width: 54,
    materials: "mixed media on canvas",
    img: "img/family.jpg",
    imgH: 512,
    imgW: 511,
    group: "mixed"
  },
  {
    title: "Auspicious T",
    slug: "auspicious-t",
    height: 24,
    width: 24,
    materials: "mixed media on panel",
    img: "img/auspicious-t.jpg",
    imgH: 512,
    imgW: 518,
    group: "mixed"
  },
  {
    title: "Bodhisattvas",
    slug: "bodhisattvas",
    height: 36,
    width: 36,
    materials: "mixed media on canvas",
    img: "img/bodhisattvas.jpg",
    imgH: 512,
    imgW: 513,
    group: "mixed"
  },
  {
    title: "Still Life With Moon On The Table",
    slug: "still-life-moon",
    height: 36,
    width: 50,
    materials: "mixed media on canvas",
    img: "img/still-life-moon.jpg",
    imgH: 434,
    imgW: 604,
    group: "mixed"
  },

  // ON PAPER
  {
    title: "The light (for grace)",
    slug: "the-light-for-grace",
    height: 30,
    width: 22,
    materials: "synthetic polymer on paper",
    img: "art/the-light-for-grace.jpg",
    imgH: 850,
    imgW: 634,
    group: "paper"
  },
  // {
  //   title: "Sadie's Arc",
  //   slug: "sadie",
  //   height: 30,
  //   width: 22,
  //   each: true,
  //   materials: "synthetic polymer on paper. diptych",
  //   img: "art/sadie.jpg",
  //   imgH:,
  //   imgW:,
  //   group: "paper"
  // },
  // {
  //   title: "from here",
  //   slug: "from-here",
  //   height: 30,
  //   width: 24,
  //   each: true,
  //   materials: "synthetic polymer on paper. diptych",
  //   img: "img/from-here.jpg",
  //   imgH:,
  //   imgW:,
  //   group: "paper"
  // },
  {
    title: "While Years Roll Past",
    slug: "while-years-roll-past",
    height: 30,
    width: 22,
    each: true,
    materials: "synthetic polymer on paper. diptych",
    img: "img/while-years-roll-past.jpg",
    imgH: 388,
    imgW: 581,
    group: "paper"
  },
  {
    title: "Where The Rivers",
    slug: "where-the-rivers",
    height: 30,
    width: 23,
    each: true,
    materials: "synthetic polymer on paper. diptych",
    img: "img/where-the-rivers.jpg",
    imgH: 501,
    imgW: 729,
    group: "paper"
  },
  // {
  //   title: "Another Time's",
  //   slug: "another-times",
  //   height: 30,
  //   width: 22,
  //   each: true,
  //   materials: "synthetic polymer on paper. diptych",
  //   img: "art/another-times.jpg",
  //   imgH:,
  //   imgW:,
  //   group: "paper"
  // },
  {
    title: "Rock Circle",
    slug: "rock-circle",
    height: 30,
    width: 22,
    each: true,
    materials: "synthetic polymer on paper. diptych",
    img: "img/rock-circle.jpg",
    imgH: 434,
    imgW: 640,
    group: "paper"
  },
  {
    title: "Night",
    slug: "night",
    height: 30,
    width: 22,
    each: true,
    materials: "synthetic polymer on paper. diptych",
    img: "img/night.jpg",
    imgH: 443,
    imgW: 638,
    group: "paper"
  },
  // {
  //   title: "Dance 1",
  //   slug: "dance-1",
  //   height: 11,
  //   width: 8,
  //   materials: "ink on paper",
  //   img: "img/dance-1.jpg",
  //   imgH:,
  //   imgW:,
  //   group: "misc"
  // },
  {
    title: "Dance 10",
    slug: "dance-10",
    height: 0,
    width: 0,
    materials: "ink on paper",
    img: "art/dance-10.jpg",
    imgH: 850,
    imgW: 638,
    group: "misc"
  },
  {
    title: "Dance 11",
    slug: "dance-11",
    height: 0,
    width: 0,
    materials: "ink on paper",
    img: "art/dance-11.jpg",
    imgH: 850,
    imgW: 638,
    group: "misc"
  },

  {
    title: "Dance 13",
    slug: "dance-13",
    height: 0,
    width: 0,
    materials: "ink on paper",
    img: "art/dance-13.jpg",
    imgH: 787,
    imgW: 800,
    group: "misc"
  },
  {
    title: "Dance 12",
    slug: "dance-12",
    height: 0,
    width: 0,
    materials: "ink on paper",
    img: "art/dance-12.jpg",
    imgH: 850,
    imgW: 638,
    group: "misc"
  },
  {
    title: "Dance 14",
    slug: "dance-14",
    height: 0,
    width: 0,
    materials: "ink on paper",
    img: "art/dance-14.jpg",
    imgH: 850,
    imgW: 641,
    group: "misc"
  },
  {
    title: "Dance 3",
    slug: "dance-3",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "art/dance-3.jpg",
    imgH: 850,
    imgW: 637,
    group: "misc"
  },
  {
    title: "Dance 4",
    slug: "dance-4",
    height: 14,
    width: 9,
    materials: "ink on paper",
    img: "art/dance-4.jpg",
    imgH: 850,
    imgW: 553,
    group: "misc"
  },
  {
    title: "Dance 5",
    slug: "dance-5",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "art/dance-5.jpg",
    imgH: 850,
    imgW: 628,
    group: "misc"
  },
  {
    title: "Dance 6",
    slug: "dance-6",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "art/dance-6.jpg",
    imgH: 850,
    imgW: 636,
    group: "misc"
  },
  {
    title: "Dance 7",
    slug: "dance-7",
    height: 14,
    width: 9,
    materials: "ink on paper",
    img: "art/dance-7.jpg",
    imgH: 850,
    imgW: 551,
    group: "misc"
  },
  {
    title: "Dance 8",
    slug: "dance-8",
    height: 15,
    width: 9,
    materials: "ink on paper",
    img: "art/dance-8.jpg",
    imgH: 850,
    imgW: 527,
    group: "misc"
  },
  {
    title: "Dance 9",
    slug: "dance-9",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "art/dance-9.jpg",
    imgH: 850,
    imgW: 629,
    group: "misc"
  },

  {
    title: "Sing 1",
    slug: "sing-1",
    height: 9,
    width: 12,
    materials: "ink on paper",
    imgH: 600,
    imgW: 794,
    img: "img/sing-1.jpg",
    group: "misc"
  },
  {
    title: "Untitled 5",
    slug: "untitled-5",
    height: 14,
    width: 9,
    materials: "ink on paper",
    img: "art/untitled-5.jpg",
    imgH: 850,
    imgW: 539,
    group: "misc"
  },
  {
    title: "Untitled 6",
    slug: "untitled-6",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "art/untitled-6.jpg",
    imgH: 850,
    imgW: 636,
    group: "misc"
  },
  {
    title: "Untitled 2",
    slug: "untitled-2",
    height: 29,
    width: 41,
    materials: "conte crayon on paper",
    img: "img/untitled-02.jpg",
    imgH: 464,
    imgW: 640,
    group: "misc"
  },
  {
    title: "Kitchen Tiles",
    slug: "kitchen",
    height: 0,
    width: 0,
    materials: "",
    img: "art/kitchen-2.jpg",
    imgH: 638,
    imgW: 850,
    group: "misc"
  },

  // NEW WORK
  {
    title: "New Work 1", // old 14
    slug: "new-work-1",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-1.jpg",
    imgH: 850,
    imgW: 691,
    group: "recent"
  },
  {
    title: "New Work 2", // old 13
    slug: "new-work-2",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-2.jpg",
    imgH: 850,
    imgW: 691,
    group: "recent"
  },
  {
    title: "New Work 3", // old 15
    slug: "new-work-3",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-3.jpg",
    imgH: 850,
    imgW: 692,
    group: "recent"
  },
  {
    title: "New Work 4", // old 21
    slug: "new-work-4",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-4.jpg",
    imgH: 850,
    imgW: 692,
    group: "recent"
  },
  {
    title: "New Work 5", // old 12
    slug: "new-work-5",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-5.jpg",
    imgH: 850,
    imgW: 700,
    group: "recent"
  },
  {
    title: "New Work 6", // old 7
    slug: "new-work-6",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-6.jpg",
    imgH: 850,
    imgW: 635,
    group: "recent"
  },
  {
    title: "New Work 7", // old 3
    slug: "new-work-7",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-7.jpg",
    imgH: 850,
    imgW: 700,
    group: "recent"
  },
  {
    title: "New Work 8", // old 8
    slug: "new-work-8",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-8.jpg",
    imgH: 850,
    imgW: 639,
    group: "recent"
  },
  {
    title: "New Work 9", // old 18
    slug: "new-work-9",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-9.jpg",
    imgH: 850,
    imgW: 701,
    group: "recent"
  },
  {
    title: "New Work 10", // old 2
    slug: "new-work-10",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-10.jpg",
    imgH: 850,
    imgW: 653,
    group: "recent"
  },
  {
    title: "New Work 11", // old 1
    slug: "new-work-11",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-11.jpg",
    imgH: 850,
    imgW: 694,
    group: "recent"
  },

  {
    title: "New Work 12", // old 4
    slug: "new-work-12",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-12.jpg",
    imgH: 850,
    imgW: 694,
    group: "recent"
  },
  {
    title: "New Work 13", // old 5
    slug: "new-work-13",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-13.jpg",
    imgH: 850,
    imgW: 700,
    group: "recent"
  },
  {
    title: "New Work 14", // old 6
    slug: "new-work-14",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-14.jpg",
    imgH: 850,
    imgW: 695,
    group: "recent"
  },

  {
    title: "New Work 15", // old 9
    slug: "new-work-15",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-15.jpg",
    imgH: 850,
    imgW: 698,
    group: "recent"
  },
  {
    title: "New Work 16", // old 10
    slug: "new-work-16",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-16.jpg",
    imgH: 850,
    imgW: 698,
    group: "recent"
  },
  {
    title: "New Work 17", // old 11
    slug: "new-work-17",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-17.jpg",
    imgH: 850,
    imgW: 694,
    group: "recent"
  },
  {
    title: "New Work 18", // old 16
    slug: "new-work-18",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-18.jpg",
    imgH: 850,
    imgW: 700,
    group: "recent"
  },
  {
    title: "New Work 19", // old 17
    slug: "new-work-19",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-19.jpg",
    imgH: 850,
    imgW: 700,
    group: "recent"
  },

  {
    title: "New Work 20", // old 19
    slug: "new-work-20",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-20.jpg",
    imgH: 850,
    imgW: 696,
    group: "recent"
  },
  {
    title: "New Work 21", // old 20
    slug: "new-work-21",
    height: 0,
    width: 0,
    materials: "",
    img: "art/new-work-21.jpg",
    imgH: 850,
    imgW: 692,
    group: "recent"
  }
];

export default posts;
