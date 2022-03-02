export const listarJson = (products) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products)
            // reject("Rechazado")
        }, 500)
    })
}