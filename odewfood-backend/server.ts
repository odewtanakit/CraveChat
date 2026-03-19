import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { supabase } from './supabase';
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/products', async (req, res) => {
    try {
        // สั่งให้ supabase วิ่งไปดึงข้อมูลทุกคอลัมน์ (*) จากตาราง products
        const { data, error } = await supabase.from('products').select('*');

        // ถ้ามี Error จากฐานข้อมูล ให้เด้งไปที่ catch
        if (error) throw error;

        // ถ้าสำเร็จ ส่งข้อมูลอาหารกลับไปให้หน้าเว็บ (สถานะ 200 = OK)
        res.status(200).json(data);
        
    } catch (error: any) {
        // ถ้าพัง ส่งข้อความแจ้งเตือนกลับไป
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log('Server กำลังวิ่งที่พอร์ต: http://localhost:' + port);
});