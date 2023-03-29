//Crear objeto expreess
const express = require('express');
//Crear objeto que represente a express
const app = express();
//Definir que la app usara la lectura de json
app.use(express.json());
//Creacion de funcion para sumar a traves de get
app.get(
    '/sumar',
    (req,res) => {
        console.log("Alguien se conecto a la ruta ")
        res.json("Hola!!");
    }
);
//Creacion de funcion para restar a traves de post
app.post(
    '/restar',
    (req, res) => {
        const {numero_1, numero_2} = req.body;
        var restar = numero_1 -numero_2;
        console.log(req.body);
        res.json("Ok! " + restar)
    }
)
//Dividir a traves de post
app.post(
    '/dividir',
    (req, res) => {
        const {numero_1, numero_2} = req.body;
        var dividir = numero_1 / numero_2;
        console.log(req.body);
        res.json("Ok! " + dividir)
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
        console.log("Servidor ejecutandose en el pueto 3000");
    }
);