import { model, Schema } from "mongoose";

const storeSchema = new Schema({
    nameStore: { type: String, required: true},
    nameUser: { type: String, required: true},
    direction: {type: String, required: true}
}, {
    timestamps:true,
    versionKey: false
});

export default model("Store",storeSchema);