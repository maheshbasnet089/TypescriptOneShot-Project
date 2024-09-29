import {config} from 'dotenv'
config()

const envConfig = {
    port : process.env.PORT, 
    mongodbString : process.env.MONGODB_URI
}

export default envConfig
