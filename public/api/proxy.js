export default async function handler(req, res) {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).send("No URL provided.");
  }

  try {
    const response = await fetch(targetUrl, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    const contentType = response.headers.get("content-type");
    res.setHeader("content-type", contentType);

    const body = await response.text();
    res.send(body);
  } catch (error) {
    res.status(500).send("Error fetching URL.");
  }
}
