import mongoose from 'mongoose';

const ShlokaSchema = new mongoose.Schema({
    chapter: { type: Number, required: true },
    verse: {
        from: { type: Number, required: true },
        to: { type: Number, required: true },
    },
    shloka: { type: String, required: true },
    devnagri: { type: String, required: true },
    synonyms: { type: String, required: true },
    translation: { type: String, required: true },
    purport: { type: String },
    isImportant: { type: Boolean, default: false },
}, {
    timestamps: true,
});

export default mongoose.models.Shloka || mongoose.model('Shloka', ShlokaSchema);
