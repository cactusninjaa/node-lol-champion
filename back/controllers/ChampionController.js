import { PrismaClient } from "@prisma/client"
import fs from 'fs'

const prisma = new PrismaClient()

const getChampions = (req, res) => {
    prisma.champion.findMany()
    .then((champions) => {
        res.json(champions)
    })
    .catch((error) => {
        res.json(error)
    })
}

const getChampion = (req, res) => {
    let id = Number(req.params.id)

    prisma.champion.findUnique({
        where: {
            id : id
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .catch((e) => {
        res.json(e)
    })
}

const createChampion = (req, res) => {
    let champion = req.body

    prisma.champion.create({ 
        data: {
            name: champion.name,
            type: champion.type
        }
    })

    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
}

const updateChampion = (req, res) => {
    let id = Number(req.params.id)
    let champion = req.body

    prisma.champion.update({
        where: {
            id: id
        },
        data: {
            name: champion.name,
            type: champion.type
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .catch((e) => {
        res.json(e)
    })
}

const deleteChampion = (req, res) => {
    let id = Number(req.params.id)

    prisma.champion.delete({
        where: {
            id: id
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
}

const deleteChampions = (req, res) => {
    prisma.champion.deleteMany({})
    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
}

const importChampion = (req, res) => {
    fs.promises.readFile('./champions.json', 'utf8')
        .then(jsonData => {
            const data = JSON.parse(jsonData);
            const promises = data.map(champion => {
                return prisma.champion.create({
                    data: {
                        name: champion.name,
                        type: champion.type,
                    }
                });
            });
            return Promise.all(promises);
        })
        .then(() => {
            res.json({ message: 'Importation réussie' });
        })
        .catch(error => {
            console.error('Erreur lors de l\'importation du fichier JSON :', error);
            res.json({ error: 'Une erreur est survenue lors de l\'importation du fichier JSON' });
        });
}

export { getChampions, getChampion, updateChampion, deleteChampion, createChampion, importChampion, deleteChampions } 