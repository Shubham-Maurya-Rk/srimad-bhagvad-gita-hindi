import AskQuestion from "@/msc/models/AskQuestion";
import { connectDB } from "@/utils/db";

export const DELETE = async (req,{params}) => {
    try{
        const { id } = await params;
        await connectDB();
        const qnas = await AskQuestion.findByIdAndDelete(id); 
        return new Response(JSON.stringify(qnas), { status: 200 });
    }catch(error){
        console.error('DELETE /api/qna error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 }); 
    }
}