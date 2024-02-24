import express from "express"
import { getChampions, getChampion, updateChampion, deleteChampion, createChampion, importChampion, deleteChampions } from "../controllers/ChampionController.js"

const router = express.Router()

router.get('/', getChampions)
router.get('/:id', getChampion)
router.post('/', createChampion)
router.put('/:id', updateChampion)
router.delete('/:id', deleteChampion)
router.delete('/', deleteChampions)
router.post('/import', importChampion)

export default router