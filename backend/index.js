import express from 'express'
import multer from 'multer'
import cors from 'cors'
import fs from 'fs/promises'
import {fileTypeFromBuffer} from 'file-type'

const PORT = 3002
const app = express()