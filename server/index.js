import dotenv from 'dotenv';
dotenv.config();
import connectToDatabse from './db.js';
import express from 'express';
import cors from 'cors';

//Routes
import productRoutes  from './routes/productRoutes.js';


connectToDatabse();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/products', productRoutes);


// localhost: 5050/api/products

const port = 5050;

app.get('/', (req, res) => {
    res.send('Api is running...');
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});




