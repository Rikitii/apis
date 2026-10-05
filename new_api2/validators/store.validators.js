import {check} from "express-validator"

const name = check("name","El nombre es obligatorio")
.trim()
.not().isEmpty()
.isString()
.length({min: 3, max: 50}).withMessage("El nombre debe tener entre 3 y 50 caracteres")
.custom((value)=> {
    if(value.tolowercase().include("store")) {
        throw new Error("El nombre no puede contener la palabra 'store'")
    }
    return true
})

const owner = check("name","El nombre de usuario es obligatorio")
.trim()
.not().isEmpty()