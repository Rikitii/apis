import express from "express"
//import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config'
import productRouter from "./routes/products.routes.js"
import { dbConnection } from "./database/config.js"
import storeRoutes from "./routes/store.routes.js"

class Server {
    app
    port
    constructor() {
        this.app = express()
        this.port = 3700
        this.port = process.env.PORT

        this.middlewares()
        this.routes()
        this.dbConnection()
    }

    middlewares() {
        this.app.use(express.json())
        console.log(process.env.PORT)
    }


    routes() {

        // this.app.get("", (req, res) => {
        //     res.send("Hola Mundo")
        // })

        this.app.use("/api/products" , productRouter)
        this.app.use("/api/store" , storeRoutes)
        
    }

    async dbConnection() {
        await dbConnection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Listen port " + this.port)
        })
    }
}

new Server().listen()