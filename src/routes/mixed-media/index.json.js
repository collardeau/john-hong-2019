import posts from "../../data.js";

const contents = JSON.stringify(posts.filter(p => p.group === "mixed"));

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
