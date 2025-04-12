import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
    cid : {type : String, required: true},
    category : {type : String, required: true},
    images : {type : String ,required: true }
});

const ShopSchemaModel = mongoose.model('Shop', shopSchema);

export default ShopSchemaModel ;