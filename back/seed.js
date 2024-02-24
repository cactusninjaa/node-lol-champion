import { importChampion } from './controllers/ChampionController.js'

// Mock request object
const req = {}

// Mock response object with a basic json method
const res = {
    json: (data) => {
        console.log(data)
    },
    status: function (statusCode) {
        this.statusCode = statusCode
        return this
    },
}

importChampion(req, res)