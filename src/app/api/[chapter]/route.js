import Shloka from "@/msc/models/Shloka";
import { connectDB } from "@/utils/db";

export async function GET(req, { params }) {
  try {
    const { chapter } = await params;

    await connectDB();

    const shlokas = await Shloka.aggregate([
      {
        $match: {
          chapter: Number(chapter),
        },
      },
      {
        $addFields: {
          verseSortKey: {
            $toInt: {
              $arrayElemAt: [
                { $split: ["$verse", "-"] },
                0,
              ],
            },
          },
        },
      },
      {
        $sort: {
          verseSortKey: 1,
        },
      },
      {
        $project: {
          verseSortKey: 0, // optional: remove temp field
        },
      },
    ]);

    return new Response(JSON.stringify(shlokas), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('GET /api/[chapter] error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
