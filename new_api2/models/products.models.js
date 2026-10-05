import { model, Schema } from "mongoose";

const productSchema = new Schema({

    store: {
        type: Schema.Types.ObjectId,
        ref:"Store",
        required: true
    },
    name: { type: String, required: true},
    price: {type: Number, default : 0, min: 0},
    stock: {type: Number, default : 0}
}, {
    timestamps:true,
    versionKey: false
});

export default model("Products",productSchema);