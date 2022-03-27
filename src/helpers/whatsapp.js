export const enviarWsp = () =>{
    window.location.assign("https://api.whatsapp.com/send?phone=51929110028&text=Hola%20MovilCool,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20");
}
export const consultarProductoWsp = (nameProduct) =>{
    let URLactual = window.location.href;
    window.location.assign("https://api.whatsapp.com/send?phone=51929110028&text=Hola%20MovilCool,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20siguiente%20producto:%20"+nameProduct+"%20"+URLactual+"%20&");
}