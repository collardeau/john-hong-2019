const posts = [
  {
    title: "Empress",
    slug: "empress",
    height: 30,
    width: 48,
    materials: "mixed media on canvas",
    img: "artwork/empress.jpg",
    group: "mixed"
  },
  {
    title: "The Bridge",
    slug: "the-bridge",
    height: 42,
    width: 64,
    materials: "mixed media on canvas",
    img: "artwork/the-bridge.jpg",
    group: "mixed"
  },
  // {
  //   title: "The Nine",
  //   slug: "the-nine",
  //   height: 42,
  //   width: 64,
  //   materials: "mixed media on canvas",
  //   img: "img/the-nine.jpg",
  //   group: "mixed"
  // },
  {
    title: "Mark At The Gate",
    slug: "mark-at-the-gate",
    height: 40,
    width: 40,
    materials: "mixed media on canvas",
    img: "artwork/mark-at-the-gate.jpg",
    group: "mixed"
  },
  {
    title: "Window",
    slug: "window",
    height: 38,
    width: 38,
    materials: "mixed media on canvas",
    img: "img/window.jpg",
    group: "mixed"
  },
  {
    title: "Neo",
    slug: "neo",
    height: 28,
    width: 44,
    materials: "mixed media on canvas",
    img: "artwork/neo.jpg",
    group: "mixed"
  },
  // {
  //   title: "All The Tea In China",
  //   slug: "all-the-tea-in-china",
  //   height: 38,
  //   width: 38,
  //   materials: "mixed media on canvas",
  //   img: "artwork/all-the-tea-in-china.jpg",
  //   group: "mixed"
  // },
  {
    title: "Riff",
    slug: "riff",
    height: 42,
    width: 42,
    materials: "mixed media on canvas",
    img: "artwork/riff.jpg",
    group: "mixed"
  },
  {
    title: "Mimic",
    slug: "mimic",
    height: 40,
    width: 40,
    materials: "mixed media on canvas",
    img: "artwork/mimic.jpg",
    group: "mixed"
  },
  {
    title: "Backstage",
    slug: "backstage",
    height: 28,
    width: 70,
    materials: "mixed media on panel",
    img: "artwork/backstage.jpg",
    group: "mixed"
  },
  // {
  //   title: "Garden",
  //   slug: "garden",
  //   height: 24,
  //   width: 30,
  //   materials: "mixed media on panel",
  //   img: "img/garden.jpg",
  //   group: "mixed"
  // },
  {
    title: "Rain",
    slug: "rain",
    height: 78,
    width: 78,
    materials: "mixed media on canvas",
    img: "img/rain.jpg",
    group: "mixed"
  },
  {
    title: "Kiss",
    slug: "kiss",
    height: 52,
    width: 52,
    materials: "mixed media on canvas",
    img: "img/kiss.jpg",
    group: "mixed"
  },
  {
    title: "Family Mandala",
    slug: "family",
    height: 54,
    width: 54,
    materials: "mixed media on canvas",
    img: "img/family.jpg",
    group: "mixed"
  },
  {
    title: "Auspicious T",
    slug: "auspicious-t",
    height: 24,
    width: 24,
    materials: "mixed media on panel",
    img: "img/auspicious-t.jpg",
    group: "mixed"
  },
  {
    title: "Bodhisattvas",
    slug: "bodhisattvas",
    height: 36,
    width: 36,
    materials: "mixed media on canvas",
    img: "img/bodhisattvas.jpg",
    group: "mixed"
  },
  {
    title: "Still Life With Moon On The Table",
    slug: "still-life-moon",
    height: 36,
    width: 50,
    materials: "mixed media on canvas",
    img: "img/still-life-moon.jpg",
    group: "mixed"
  },

  // ON PAPER
  {
    title: "The light (for grace)",
    slug: "the-light-for-grace",
    height: 30,
    width: 22,
    materials: "synthetic polymer on paper",
    img: "artwork/the-light-for-grace.jpg",
    group: "paper"
  },
  // {
  //   title: "Sadie's Arc",
  //   slug: "sadie",
  //   height: 30,
  //   width: 22,
  //   each: true,
  //   materials: "synthetic polymer on paper. diptych",
  //   img: "artwork/sadie.jpg",
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
    group: "paper"
  },
  // {
  //   title: "Another Time's",
  //   slug: "another-times",
  //   height: 30,
  //   width: 22,
  //   each: true,
  //   materials: "synthetic polymer on paper. diptych",
  //   img: "artwork/another-times.jpg",
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
    group: "paper"
  },
  // {
  //   title: "Dance 1",
  //   slug: "dance-1",
  //   height: 11,
  //   width: 8,
  //   materials: "ink on paper",
  //   img: "img/dance-1.jpg",
  //   group: "misc"
  // },
  {
    title: "Dance 2",
    slug: "dance-2",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "artwork/dance-2.jpg",
    group: "misc"
  },
  {
    title: "Dance 3",
    slug: "dance-3",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "artwork/dance-3.jpg",
    group: "misc"
  },
  {
    title: "Dance 4",
    slug: "dance-4",
    height: 14,
    width: 9,
    materials: "ink on paper",
    img: "artwork/dance-4.jpg",
    group: "misc"
  },
  {
    title: "Dance 5",
    slug: "dance-5",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "artwork/dance-5.jpg",
    group: "misc"
  },
  {
    title: "Dance 6",
    slug: "dance-6",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "artwork/dance-6.jpg",
    group: "misc"
  },
  {
    title: "Dance 7",
    slug: "dance-7",
    height: 14,
    width: 9,
    materials: "ink on paper",
    img: "artwork/dance-7.jpg",
    group: "misc"
  },
  {
    title: "Dance 8",
    slug: "dance-8",
    height: 15,
    width: 9,
    materials: "ink on paper",
    img: "artwork/dance-8.jpg",
    group: "misc"
  },
  {
    title: "Dance 9",
    slug: "dance-9",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "artwork/dance-9.jpg",
    group: "misc"
  },
  {
    title: "Dance 10",
    slug: "dance-10",
    height: 0,
    width: 0,
    materials: "ink on paper",
    img: "artwork/dance-10.jpg",
    group: "misc"
  },
  {
    title: "Dance 11",
    slug: "dance-11",
    height: 0,
    width: 0,
    materials: "ink on paper",
    img: "artwork/dance-11.jpg",
    group: "misc"
  },
  {
    title: "Dance 12",
    slug: "dance-12",
    height: 0,
    width: 0,
    materials: "ink on paper",
    img: "artwork/dance-12.jpg",
    group: "misc"
  },
  {
    title: "Dance 13",
    slug: "dance-13",
    height: 0,
    width: 0,
    materials: "ink on paper",
    img: "artwork/dance-13.jpg",
    group: "misc"
  },
  {
    title: "Dance 14",
    slug: "dance-14",
    height: 0,
    width: 0,
    materials: "ink on paper",
    img: "artwork/dance-14.jpg",
    group: "misc"
  },
  {
    title: "Sing 1",
    slug: "sing-1",
    height: 9,
    width: 12,
    materials: "ink on paper",
    img: "img/sing-1.jpg",
    group: "misc"
  },
  {
    title: "Untitled 5",
    slug: "untitled-5",
    height: 14,
    width: 9,
    materials: "ink on paper",
    img: "artwork/untitled-5.jpg",
    group: "misc"
  },
  {
    title: "Untitled 6",
    slug: "untitled-6",
    height: 12,
    width: 9,
    materials: "ink on paper",
    img: "artwork/untitled-6.jpg",
    group: "misc"
  },
  {
    title: "Kitchen Tiles",
    slug: "kitchen",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/kitchen-2.jpg",
    group: "misc"
  },
  {
    title: "Untitled 2",
    slug: "untitled-2",
    height: 29,
    width: 41,
    materials: "conte crayon on paper",
    img: "img/untitled-02.jpg",
    group: "misc"
  },

  // NEW WORK
  {
    title: "New Work 3",
    slug: "new-work-3",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-03.jpg",
    group: "recent"
  },
  {
    title: "New Work 1",
    slug: "new-work-1",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-01.jpg",
    group: "recent"
  },
  {
    title: "New Work 2",
    slug: "new-work-2",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-02.jpg",
    group: "recent"
  },
  {
    title: "New Work 4",
    slug: "new-work-4",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-04.jpg",
    group: "recent"
  },
  {
    title: "New Work 5",
    slug: "new-work-5",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-05.jpg",
    group: "recent"
  },
  {
    title: "New Work 6",
    slug: "new-work-6",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-06.jpg",
    group: "recent"
  },
  {
    title: "New Work 7",
    slug: "new-work-7",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-07.jpg",
    group: "recent"
  },
  {
    title: "New Work 8",
    slug: "new-work-8",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-08.jpg",
    group: "recent"
  },
  {
    title: "New Work 9",
    slug: "new-work-9",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-09.jpg",
    group: "recent"
  },
  {
    title: "New Work 10",
    slug: "new-work-10",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-10.jpg",
    group: "recent"
  },
  {
    title: "New Work 11",
    slug: "new-work-11",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-11.jpg",
    group: "recent"
  },
  {
    title: "New Work 12",
    slug: "new-work-12",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-12.jpg",
    group: "recent"
  },
  {
    title: "New Work 13",
    slug: "new-work-13",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-13.jpg",
    group: "recent"
  },
  {
    title: "New Work 14",
    slug: "new-work-14",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-14.jpg",
    group: "recent"
  },
  {
    title: "New Work 15",
    slug: "new-work-15",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-15.jpg",
    group: "recent"
  },
  {
    title: "New Work 16",
    slug: "new-work-16",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-16.jpg",
    group: "recent"
  },
  {
    title: "New Work 17",
    slug: "new-work-17",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-17.jpg",
    group: "recent"
  },
  {
    title: "New Work 18",
    slug: "new-work-18",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-18.jpg",
    group: "recent"
  },
  {
    title: "New Work 19",
    slug: "new-work-19",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-19.jpg",
    group: "recent"
  },
  {
    title: "New Work 20",
    slug: "new-work-20",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-20.jpg",
    group: "recent"
  },
  {
    title: "New Work 21",
    slug: "new-work-21",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/new-work-21.jpg",
    group: "recent"
  }
];

export default posts;
