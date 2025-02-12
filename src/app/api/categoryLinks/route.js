export async function GET() {
  const token = process.env.STORYBLOK_API_KEY;

  const version = process.env.NODE_ENV === "production" ? "published" : "draft";

  const url = `https://api.storyblok.com/v2/cdn/stories/category-links?version=${version}&token=${token}&cv=1739350408`;

  const response = await fetch(url, { next: { revalidate: 300 } });

  if (!response.ok) throw new Error("Error fetching data");

  const data = await response.json();

  const content = data.story.content;

  return Response.json(content);
}
