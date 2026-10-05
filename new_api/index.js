import express from "express"

import { v4 as uuidv4 } from 'uuid'

uuidv4() // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4'

class Server {

    app
    port

    constructor() {
        this.app = express()
        this.port = 1500

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.get("/", (req, res) => {
            res.status(200).send('Hola polque no me ha mandado uno wasa')
        })

        this.app.get("/profile", (req, res) => {
            res.status(200).json({
                msg: 'Hola Usuario'
            })
        })

        this.app.post("/profile2", (req, res) => {
            const datos = req.body

            console.log(datos)

            res.status(200).json({
                msg: 'Hola  ${datos.name} tienes ${datos.edad} años'
            })
        })

        this.app.get("/hola/:nombre", (req, res) => {
            const datos2 = req.params

            res.status(200).json({
                msg: datos2.nombre
            })
        })

        this.app.get("/doblar/:num1/:num2", (req, res) => {
            const { num1, num2 } = req.params

            const suma = parseInt(num1) * parseInt(num2)

            res.status(200).json({
                msg: 'La multiplicación de ${num1} y ${num2} es ${suma}'
            })
        })

        this.app.get("/saludo", (req, res) => {
            const datos = req.query

            console.log(datos)

            res.status(200).json(datos)
        });

        this.app.get("/convertir", (req, res) => {

            const temperatura = parseInt(req.query.valor)

            if (!temperatura) {
                return res.status(400).json({
                    msg: 'Por favor, proporciona la temperatura en Celsius como parámetro de consulta.'
                })
            }

            res.status(200).json({
                msg: 'La temperatura en Celsius es: ${temperatura} y en Fahrenheit es:  ${temperatura} * 1.8 + 32'
            })
        });

        this.app.get("/products",(req,res) => {

        })

        this.app.post("/products" ,(req,res) => {
            
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Listen port " + this.port)
        })
    }
}

new Server().listen()
