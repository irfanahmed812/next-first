import mongoose, { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'prompt is requride.']
    },
    tag: {
        type: String,
        required: [true, 'tag is requride.']
    },
})

const Prompt = models.Prompt || model('Prompt', promptSchema);

export default Prompt;