import {config} from 'dotenv'
config()

const envConfig = {
    port : process.env.PORT, 
    mongodbString : process.env.MONGODB_URI, 
    backendUrl : process.env.BACKEND_URL
}

export default envConfig
