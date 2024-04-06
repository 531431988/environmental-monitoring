import axios from '@/utils/axios'
import http from '@/utils/http'
console.log(import.meta.env.MODE)
export default import.meta.env.MODE === 'development' ? axios : http;
