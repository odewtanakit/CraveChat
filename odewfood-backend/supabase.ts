import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); // สั่งให้อ่านรหัสผ่านจากไฟล์ .env

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

// สร้างตัวแทนจำหน่าย (Client) เพื่อเอาไปใช้คุยกับฐานข้อมูลในไฟล์อื่นๆ
export const supabase = createClient(supabaseUrl, supabaseKey);