import * as express from "express"
import { Request, Response } from "express"
import { Todo } from "./entity/todo.entity"
import { myDataSource } from "./app-data-source"

// conexion a la base de datos
myDataSource
    .initialize()
    .then(() => {
        console.log("Conexión a la base de datos exitosa")
    })
    .catch((err) => {
        console.error("Error al conectarse a la base de datos :", err)
    })

// config express
const app = express();
app.use(express.json())

// rutas de TODOS
app.get("/todos", async function (req: Request, res: Response) {
    const users = await myDataSource.getRepository(Todo).find()
    res.json(users)
})

app.get("/todos/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Todo).findOneBy({
        id: Number(req.params.id),
    })
    return res.send(results)
})

app.post("/todos", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(Todo).create(req.body)
    const results = await myDataSource.getRepository(Todo).save(user)
    return res.send(results)
})

app.put("/todos/:id", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(Todo).findOneBy({
        id: Number(req.params.id),
    })
    myDataSource.getRepository(Todo).merge(user, req.body)
    const results = await myDataSource.getRepository(Todo).save(user)
    return res.send(results)
})

app.delete("/todos/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(Todo).delete(req.params.id)
    return res.send(results)
})

// express server
app.listen(3000)