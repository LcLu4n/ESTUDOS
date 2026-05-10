import express from 'express';
import { PrismaClient } from './generated/prisma/client.js';

const app = express();

app.use(express.json()) // para o express entender o formato json


const prisma = new PrismaClient()

//req=request, res=response
app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(user)
})

app.put('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.update({
        where:{
            id: req.params.id // id do usuário que quero atualizar
        },
            data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
    }
    })

res.status(201).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where:{
            id: req.params.id // id do usuário que quero deletar
        }
    })
    res.status(204).json({message: "Usuário deletado"}) // 204 = No Content
})

app.listen(3000)
// http://localhost:3000
// luanmaia-LM   user
// 7YpEN6rfwdorUL0U   gey