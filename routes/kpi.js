import express from 'express';
import KPI from '../models/KP.js';

const router = express.router();

router.get("/kpis", async (req, res) => {
    try{
        const kpis = await KPI.find();
        res.status(200)
    }catch (error){
        res.status(404).json({message: error.message})

    }
})

export default router;