import { getPlaiceholder } from "plaiceholder";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("imageUrl");

  if (!imageUrl) {
    return NextResponse.json({ error: "Invalid image URL" }, { status: 400 });
  }

  try {
    const response = await fetch(imageUrl);
    const buffer = Buffer.from(await response.arrayBuffer());
    const { base64 } = await getPlaiceholder(buffer, { size: 20 });

    return NextResponse.json({ base64 }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate placeholder" },
      { status: 500 },
    );
  }
}
