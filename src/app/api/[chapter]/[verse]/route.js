import Shloka from "@/msc/models/Shloka";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { chapter, verse } = await params;

    await connectDB();

    const shloka = await Shloka.findOne({
      chapter: parseInt(chapter),
      "verse.from": parseInt(verse),
    });

    if (!shloka) {
      return new NextResponse(JSON.stringify({ error: 'Shloka not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new NextResponse(JSON.stringify(shloka), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.log("Error: ", err)
    console.error('GET /api/[chapter]/[verse] error:', err);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
