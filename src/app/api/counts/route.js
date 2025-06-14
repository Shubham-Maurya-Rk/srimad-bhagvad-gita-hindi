import AskQuestion from "@/msc/models/AskQuestion";
import Qna from "@/msc/models/Qna";
import Shloka from "@/msc/models/Shloka";
import { connectDB } from "@/utils/db";

export const GET = async (req) => {
    try {
        await connectDB();
        const [shlokaCount, qnaCount, askQuestionCount] = await Promise.all([
            Shloka.countDocuments(),
            Qna.countDocuments(),
            AskQuestion.countDocuments(),
        ]);
        return new Response(JSON.stringify({ shlokaCount, qnaCount, askQuestionCount }), { status: 200 });
    } catch (error) {
        console.error('GET /api/counts error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
