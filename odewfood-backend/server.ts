import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('ยินดีต้อนรับสู่ CraveChat Backend!');
});

app.listen(port, () => {
    console.log('Server กำลังวิ่งที่พอร์ต: http://localhost:' + port);
});