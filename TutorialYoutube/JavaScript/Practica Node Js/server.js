
//importamos express desde la consola con
//npm install express

/*
características para facilitar el desarrollo de 
aplicaciones web y APIs (interfaces de programación de 
aplicaciones).
Es minimalista y flexible, lo que significa que
permite a los desarrolladores crear aplicaciones web
de manera rápida y con un código limpio.
*/

//importamos cors desde consola
//npm install cors

/*
CORS (Cross-Origin Resource Sharing)
es una política de seguridad implementada por
los navegadores web que restringe las solicitudes HTTP 
realizadas desde un dominio (origen) hacia otro dominio
diferente al que pertenece la página web que está 
haciendo la solicitud. Es una medida de seguridad 
importante para proteger los usuarios de la web 
contra ataques maliciosos, como el robo de datos o 
la ejecución de scripts no autorizados.
*/

import reviews from "./api/reviews.rout.js"

//vamos a cargar express en una constante

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/reviews",reviews);

app.use("*",(req,res)=>res.status(404).json({error:"not found"}));

export default app;