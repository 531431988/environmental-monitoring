import axios from '@/utils/axios'
import http from '@/utils/http'
console.log(import.meta.env.MODE)
export default ['development', 'test'].includes(import.meta.env.MODE) ? axios : http;
