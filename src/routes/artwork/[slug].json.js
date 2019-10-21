import posts from "../../data.js";

const lookup = new Map();
posts.forEach((post, i) => {
  const prev = posts[i - 1] ? posts[i - 1].slug : posts[posts.length - 1].slug;
  const next = posts[i + 1] ? posts[i + 1].slug : posts[0].slug;
  lookup.set(post.slug, JSON.stringify({ post, prev, next }));
});

export function get(req, res) {
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}
