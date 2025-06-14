import mongoose from "mongoose";

const QnaSchema = new mongoose.Schema({
    chapter : { type: Number, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

export default mongoose.models.Qna || mongoose.model('Qna', QnaSchema);