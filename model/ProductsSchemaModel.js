import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    pID: { type: Number, required: true, unique: true },
    category: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true },
    discountPrice: { type: String, required: true },
    img: { type: String, required: true },
    subimage1: { type: String, required: false },
    subimage2: { type: String, required: false },
    subimage3: { type: String, required: false },
    subimage4: { type: String, required: false },
    color: { type: [String], required: true },
    description: { type: String, required: true },
    productDetails: {
        title: { type: String, required: false },
        features: { type: [String], required: true }
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
