export default async function getAbout() {
  const token = process.env.STORYBLOK_API_KEY;

  const url = `https://api.storyblok.com/v2/cdn/stories/about?version=draft&token=${token}&cv=1738919397`;

  const response = await fetch(url, { next: { revalidate: 1800 } });

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const data = await response.json();

  const content = data.story.content;

  return content;
}
