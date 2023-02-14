import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name:{type: String, required:true},
        email: {type: String, required: true, unique:true},
        password: {type: String, required:true},
        isAdmin: {type: Boolean, required: true, default:false},
    },{
        timeStamps:true,
    }
);

const Product = mongoose.models.Product || mongoose.model('Product',productSchema);

export default Product;