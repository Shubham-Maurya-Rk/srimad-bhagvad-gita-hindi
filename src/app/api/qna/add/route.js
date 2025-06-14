import Qna from "@/msc/models/Qna";
import { connectDB } from "@/utils/db";

export const POST = async (req) => {
    try {
        const { chapter, question, answer } = await req.json();
        if (!question || !answer || !chapter) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
        }
        await connectDB();
        const newQna = await Qna.create({  chapter, question, answer });
        return new Response(JSON.stringify({ message: 'Qna added', qna: newQna }), { status: 201 });
    } catch (error) {
        console.error('POST /api/qna/add error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}