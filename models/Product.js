import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);


const ProductSchema = new Schema(
    {
        price: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        }, 
        expense: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        }, 
        transactions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction",
            get: (v) => v / 100
        }], 
    
         monthlyData: [monthSchema],
         dailyData: [daySchema]
    },
    { timestamps:true, toJSON: {getters: true}}
);

const KPI = mongoose.model("Product", ProductSchema)

export default Product;