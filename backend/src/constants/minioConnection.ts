import {Client} from 'minio'

export default new Client({
    endPoint: process.env.MINIO_HOST,
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ROOT_USER,
    secretKey: process.env.MINIO_ROOT_PASSWORD
})



