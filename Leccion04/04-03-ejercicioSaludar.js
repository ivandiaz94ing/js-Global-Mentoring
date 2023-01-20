let hora = "09:00";
let horacompactada = hora.split(':');
console.log(horacompactada);
let horaunida = horacompactada[0]+horacompactada[1];


let hN = Number(horaunida);

if (hora == "06:00" || hora == "07:00" || hora == "08:00" || hora == "09:00" || hora == "10:00" || hora == "11:00") {
    console.log("!!!!!Buenos dias!!!!!");
    

} else {
    if (hora == "12:00" || hora == "13:00" || hora == "14:00" || hora == "15:00" || hora == "16:00" || hora == "17:00" || hora == "18:00") {
    console.log("!!!!!Buenas tardes!!!!!");

        
    } else {
        if (hora == "19:00" || hora == "20:00" || hora == "21:00" || hora == "22:00" || hora == "23:00" || hora == "24:00") {
            console.log("!!!!!Buenas noches!!!!!")
        } else {
            console.log("!!!!!Durmiendo!!!!!")
        }

    }

    

}

//OTRA FORMA
let mensaje;


if (hN>500 && hN<=1100) {
    mensaje = "!!!!! Buenos Días 2!!!!!"
} else {
    if (hN>1100 && hN<=1800) {
        mensaje = "!!!!! Buenos Tardes 2!!!!!"
    } else {
        if (hN > 1800 && hN <= 2400) {
            mensaje = "!!!!! Buenos Noches 2!!!!!"
        } else {
            mensaje = "!!!!! Durmiendo 2!!!!!"
        }
        
    }
    
}
console.log(mensaje);