//Crear objeto expreess
const express = require('express');
//Crear objeto que represente a express
const app = express();
//Definir que la app usara la lectura de json
app.use(express.json());

app.use(function(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        next();        
    }
);

//Creacion de funcion para sumar a traves de post
app.post(
    '/sumar',
    (req, res) => {
        const {numero_1, numero_2} = req.body;
        var sumar = parseFloat(numero_1) + parseFloat(numero_2);
        console.log(req.body);
        res.json(sumar)
    }
)
//Creacion de funcion para restar a traves de post
app.post(
    '/restar',
    (req, res) => {
        const {numero_1, numero_2} = req.body;
        var restar = numero_1 -numero_2;
        console.log(req.body);
        res.json(restar)
    }
)
//Multiplicar a traves de post
app.post(
    '/multiplicar',
    (req, res) => {
        const {numero_1, numero_2} = req.body;
        var dividir = numero_1 * numero_2;
        console.log(req.body);
        res.json(dividir)
    }
)
//Dividir a traves de post
app.post(
    '/dividir',
    (req, res) => {
        const {numero_1, numero_2} = req.body;
        if(numero_1 == 0 || numero_2 == 0){
            dividir = "Indivisible por 0!!!"
        }else{
            var dividir = numero_1 / numero_2;
        }
        console.log(req.body);
        res.json(dividir)
    }
)


//Taller
/*
    Sumar valores sin importar cuantos son
    se envian asi en el json
    {
	 "valores": [2, 4, 6, 8, 10]
    }
*/
app.post(
    '/sumar_valores',
    (req, res) => {
        const {valores} = req.body;
        let sum=0;
        valores.forEach(element =>{
            sum += element;
        });
        console.log(req.body);
        res.json("Ok! " + sum)
    }
)

app.listen(
    3000,
    () => {
        console.log("Servidor ejecutandose en el puerto 3000");
    }
);