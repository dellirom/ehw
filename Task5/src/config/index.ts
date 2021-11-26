import  dotenv from 'dotenv';

const env =  dotenv.config();

if (env.error){
    throw new Error("File .env not exist! ")
}

export default {
    /**
     * Application port
     */
    PORT: process.env.APP_PORT,

    /**
     * Db connection params
     */
    DB_HOST : process.env.DB_HOST,
    DB_NAME : process.env.DB_NAME,
    DB_USER : process.env.DB_USER,
    DB_PASS : process.env.DB_PASS,
    DB_URL : process.env.DB_URL
}
