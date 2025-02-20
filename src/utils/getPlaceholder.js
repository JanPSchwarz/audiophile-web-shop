import { getPlaiceholder } from "plaiceholder";

export default async function getPlaceholder(src) {
  try {
    const response = await fetch(src, { next: { revalidate: 300 } });

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const { base64 } = await getPlaiceholder(buffer, { size: 20 });
    return base64;
  } catch (error) {
    console.error("Error generating Placeholder:", error);
    return null;
  }
}
