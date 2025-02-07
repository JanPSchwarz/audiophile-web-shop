export default async function getLandingPageContent() {
  const token = process.env.STORYBLOK_API_KEY;

  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=draft&token=${token}&cv=1738679351`;

  const response = await fetch(url, { next: { revalidate: 300 } });

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const data = await response.json();

  const content = data.story.content;

  return content;
}
