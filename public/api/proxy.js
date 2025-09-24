export default async function handler(req, res) {
  const target = req.query.url;
  if (!target) {
    return res.status(400).json({ error: "Missing url parameter" });
  }

  try {
    const response = await fetch(target);
    const text = await response.text();
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: "Proxy failed", details: err.message });
  }
}
