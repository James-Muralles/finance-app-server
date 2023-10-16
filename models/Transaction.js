import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);


const TransactionSchema = new Schema(
    {
        buyer: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        }, 
        amount: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        }, 
        productIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            get: (v) => v / 100
        }], 
    
         monthlyData: [monthSchema],
         dailyData: [daySchema]
    },
    { timestamps:true, toJSON: {getters: true}}
);

const KPI = mongoose.model("Transaction", TransactionSchema)

export default Transaction;