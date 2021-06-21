import * as express from 'express'
import { makeCrud } from './crud/make-crud'
const app = express()

const api = '/api/'
const path = './storage'

const endpoints = ['icons', 'images', 'photos']

endpoints.map((ep) => app.use(api + ep, makeCrud(ep, path)))

export { app }
