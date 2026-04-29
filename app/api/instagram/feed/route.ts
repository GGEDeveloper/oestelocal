import { NextResponse } from "next/server";

// Stub para Graph API do Instagram (Basic Display / Graph).
// Quando INSTAGRAM_ACCESS_TOKEN estiver definido, faz o pedido ao /me/media.
// Caso contrário devolve { data: [] } e o componente faz fallback aos posts editoriais.
export const revalidate = 1800; // 30 min de cache

const FIELDS =
  "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json({ data: [], live: false }, { status: 200 });
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=12&access_token=${token}`;
    const r = await fetch(url, { next: { revalidate: 1800 } });
    if (!r.ok) {
      return NextResponse.json({ data: [], live: false }, { status: 200 });
    }
    const json = await r.json();
    return NextResponse.json({ data: json.data ?? [], live: true });
  } catch {
    return NextResponse.json({ data: [], live: false }, { status: 200 });
  }
}
