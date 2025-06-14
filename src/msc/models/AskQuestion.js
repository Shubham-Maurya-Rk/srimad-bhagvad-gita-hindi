import mongoose from "mongoose";

const AskQuestionSchema = new mongoose.Schema({
    question: { type: String, required: true },
});

export default mongoose.models.AskQuestion || mongoose.model('AskQuestion', AskQuestionSchema);