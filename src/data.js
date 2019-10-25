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
    title: "Still Life Moon",
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
    title: "Untitled 7",
    slug: "untitled-07",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/graffiti-1.jpg",
    group: "recent"
  },
  {
    title: "Untitled 8",
    slug: "untitled-08",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/graffiti-2.jpg",
    group: "recent"
  },
  {
    title: "Untitled 9",
    slug: "untitled-09",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/graffiti-3.jpg",
    group: "recent"
  },
  {
    title: "Untitled 10",
    slug: "untitled-10",
    height: 0,
    width: 0,
    materials: "",
    img: "artwork/graffiti-4.jpg",
    group: "recent"
  }
];

// posts.forEach(post => {
//   post.html = post.html.replace(/^\t{3}/gm, "");
// });

export default posts;
