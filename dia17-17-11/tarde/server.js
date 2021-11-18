import cors from "cors";
import multer from 'multer';  //leer los archivos
import methodOverride from "method-override";
import { v4 as uuid} from 'uuid'; //se usar para el hash
import express from 'express';
import dayjs from "dayjs";

const server = express();
const port=3000;
const log =console.log;

server.use(cors());
server.use(express.json());
//server.use(express.urlencoded({extended})); 

//configuracion
const multerConfig= multer.diskStorage({   
    destination:function(res,file,cb){
        cb(null,"./bucket")//Donde lo vamos a ubicar
    },
    filename:function(res,file,cb){
        let idImage =uuid().split("-")[0];
        let day =dayjs().format('DD-MM-YYYY');
        cb(null,`${day}.${idImage}.${file.originalname}`);
    }
});
const multerMiddle =multer({storage:multerConfig})

server.listen(port,()=>{
    log("start server http://localhost:"+port);    
}).on("error",()=>{
    log("error server");
});

server.get("/",(req,res)=>{
    res.send(uuid().split("-")[0])
});

server.post("/upload",multerMiddle.single("imagefile"),(req,res)=>{
    if(req.file){
        res.send("Imagen guardada....");
    }
    else
        res.send("Error en imagen");
});

