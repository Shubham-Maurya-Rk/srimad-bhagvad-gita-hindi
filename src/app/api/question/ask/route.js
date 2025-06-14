import AskQuestion from "@/msc/models/AskQuestion";
import { connectDB } from "@/utils/db";

export const POST = async (req) => {
    try {
        const { question } = await req.json();
        if (!question) {
            return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 }); 
        }
        await connectDB();
        const newQuestion = await AskQuestion.create({ question });
        return new Response(JSON.stringify({ message: 'Question added', question: newQuestion }), { status: 201 });
    } catch (error) {
        console.error('POST /api/ask-question error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 }); 
    }
}