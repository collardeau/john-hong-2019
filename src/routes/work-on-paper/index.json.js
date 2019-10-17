import posts from "../../data";

const contents = JSON.stringify(posts.filter(p => p.group === "paper"));

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
