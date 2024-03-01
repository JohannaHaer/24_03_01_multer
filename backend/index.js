import express from 'express'
import multer from 'multer'
import cors from 'cors'
import fs from 'fs/promises'
import {fileTypeFromBuffer} from 'file-type'

const PORT = 3002
const app = express()
const blogsPath = './blogs.json'

const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
}

app.use(express.json())
app.use(cors(corsOptions))

const readBlogsJson = async () => {
    JSON.parse(await fs.readFile(blogsPath, {encoding: 'utf-8'}))
}

app.get('/', async (req, res) => {
    try {
        const blog = await readBlogsJson()
        res.json(blog)
    } catch (error) {
        res.status(500).end()
    }
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})