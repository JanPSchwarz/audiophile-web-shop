export default async function getNavigationContent() {
  const token = process.env.STORYBLOK_API_KEY;

  const url = `https://api.storyblok.com/v2/cdn/stories/navigation?version=draft&token=${token}&cv=1738610246`;

  const response = await fetch(url, { next: { revalidate: 300 } });

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const data = await response.json();

  const content = data.story.content;

  return content;
}
