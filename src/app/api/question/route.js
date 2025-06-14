import AskQuestion from "@/msc/models/AskQuestion";
import { connectDB } from "@/utils/db";

export const GET = async (req) => {
    try {
        await connectDB();
        const qnas = await AskQuestion.find(); 
        return new Response(JSON.stringify(qnas), { status: 200 }); 
    } catch (error) {
        console.error('GET /api/qna error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 }); 
    }
}

