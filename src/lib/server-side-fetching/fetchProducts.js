export default async function getProducts() {
  const token = process.env.STORYBLOK_API_KEY;

  const version = process.env.NODE_ENV === "production" ? "published" : "draft";

  const url = `https://api.storyblok.com/v2/cdn/stories/products?version=${version}&token=${token}&cv=1738698951`;

  const response = await fetch(url, { next: { revalidate: 300 } });

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const data = await response.json();

  const content = data.story.content.data;

  return content;
}
