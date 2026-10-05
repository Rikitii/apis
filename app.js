const userName = prompt("Registre su nombre")
const userMail = prompt("Registre su correo electronico")
const typeUser = parseInt(prompt("Digite su tipo de usuario: 1= Normal, 2= Estudiante, 3= Premium"), 10)
let purchase = 0
let env = 0
let newPurchase = 0
let purchaseIva = 0


//Catalogo de productos
const catalogo = [
    { nombre: "TECLADO", precio: 120000 },
    { nombre: "MOUSE", precio: 80000 },
    { nombre: "MONITOR", precio: 450000 },
    { nombre: "USB 32GB", precio: 35000 },
    { nombre: "PORTATIL", precio: 2500000 },
];

//Nombre de usuario
function valUser(userName) {
    userName = userName.trim()
    userName = userName.toUpperCase()
    return userName
}

//Validaciones
if (userName === "" && userMail === "") {
    console.log("Ingrese un nombre")
    console.log("Ingrese un correo electronico")
} else if (userName.length <= 2) {
    console.log("Ingrese un nombre valido")
} else if (!userMail.includes("@")) {
    console.log("Ingrese una direccion de correo valida")
} else if (!userMail.endsWith(".com") && !userMail.endsWith(".co")) {
    console.log("Ingrese una direccion de correo valida")
} else {
    console.log("========= BYTESTORE =========")
    console.log("Nombre: " + valUser(userName))
    console.log("Correo electronico: " + userMail)
}

const cart = parseInt(prompt("Digite la cantidad de productos que desea comprar"))
const compra = []

if (isNaN(cart) || cart <= 0) {
    console.log("Cantidad no valida")
} else {
    let i = 1

    while (i <= cart) {
        let products = prompt("Que producto desea añadir al carrito")

        if (products === null) {
            console.log("Compra cancelada")
            break
        }

        products = products.trim().toUpperCase()

        const findProduct = catalogo.find(productos => productos.nombre === products)

        if (findProduct === undefined) {
            console.log("producto no encontrado")
        } else {
            compra.push(findProduct)
            i++
        }
    }
}

console.log("-----------------------------")

for (let j = 0; j < compra.length; j++) {
    console.log(compra[j].nombre + " - $" + compra[j].precio.toLocaleString("es-CO"))
    purchase += compra[j].precio
}

console.log("-----------------------------")

//Descuentos y tipos de usuarios
let desc = 0
switch (typeUser) {
    case 1:
        desc = 0
        type = "Tipo de cliente: Normal (Descuento: 0%)"
        break;
    case 2:
        desc = 0.10
        type = "Tipo de cliente: Estudiante (Descuento: 10%)"
        break;
    case 3:
        if (typeUser == 3 && purchase <= 499999) {
            type = "Tipo de cliente: Premium (Descuento 20%)"
            desc = 0.20
        } else if (typeUser == 3 && purchase >= 500000) {
            type = "Tipo de cliente: Premium (Descuento 25%)"
            desc = 0.25
        }
        break;
    default:
        desc = 0
        type = "Tipo de cliente no valido"
}
console.log(type)
console.log("-----------------------------")

function precioConIva() {
    let iva = 0.19
    purchaseIva = purchase * iva
    newPurchase = purchaseIva + purchase
    return newPurchase
}

console.log("SubTotal (Con IVA): -- $" + precioConIva(newPurchase).toLocaleString("es-CO"))

const descuento = newPurchase * desc

console.log("Descuento: -- $" + descuento.toLocaleString("es-CO"))

if (typeUser == 2 || purchase >= 1000000) {
    env = 0
    console.log("Valor del envio: GRATIS")
} else {    
    env = 15000
    console.log("Valor del envio: -- $" + env.toLocaleString("es-CO"))
}

const total = precioConIva(newPurchase) - descuento
const newTotal = total + env

console.log("Total a pagar: -- $" + newTotal.toLocaleString("es-CO"))
console.log("=============================")
console.log("¡Gracias por su compra!")



