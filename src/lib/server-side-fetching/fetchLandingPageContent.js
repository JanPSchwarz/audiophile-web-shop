export default async function getLandingPageContent() {
  const token =
    process.env.NODE_ENV === "production"
      ? process.env.STORYBLOK_PUBLIC_API_KEY
      : process.env.STORYBLOK_PREVIEW_API_KEY;

  const version = process.env.NODE_ENV === "production" ? "published" : "draft";

  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&cv=1738679351`;

  const response = await fetch(url, { next: { revalidate: 300 } });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();

  const content = data.story.content;

  return content;
}
