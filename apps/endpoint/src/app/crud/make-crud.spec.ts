import express = require('express')
import { Application } from 'express'
import { makeCrud } from './make-crud'
import * as request from 'supertest'
import * as fs from 'fs'

describe('CRUD via REST', () => {
  let app: Application

  beforeAll(async () => {
    app = express()
    app.use('/car', makeCrud('car', './test'))
    // wait for makeCrud to have created storage
    await new Promise((resolve) => setTimeout(resolve, 100))
  })

  it('should CRUD a car via REST', async () => {
    const car = { make: 'Mercedes' }
    const expectedId = 0

    const postResult = await request(app).post('/car').send(car)
    expect(postResult.status).toEqual(201)
    expect({ ...postResult.body }).toStrictEqual({ ...car, id: expectedId })

    const getAllResult = await request(app).get('/car').send()

    // @TODO verificar pq vem vazio
    expect(getAllResult.body).toHaveLength(1)
    expect(getAllResult.body[0]).toStrictEqual({ ...car, id: expectedId })

    const getSingleResult = await request(app).get(`/car/${expectedId}`).send()
    expect(getSingleResult.status).toEqual(200)
    expect(getSingleResult.body).toStrictEqual({ ...car, id: expectedId })

    const updatedCar = { ...car, make: 'BMW' }
    const putResult = await request(app)
      .put(`/car/${expectedId}`)
      .send(updatedCar)
    expect(putResult.status).toEqual(200)
    expect(putResult.body).toStrictEqual({ ...updatedCar, id: expectedId })

    const deleteResult = await request(app).delete(`/car/${expectedId}`).send()
    expect(deleteResult.status).toEqual(200)
    expect((await request(app).get('/car').send()).body).toHaveLength(0)

    const postResultWithId = await request(app)
      .post('/car')
      .send({ ...car, id: 42 })
    expect(postResultWithId.status).toEqual(201)
    expect({ ...postResultWithId.body }).toStrictEqual({ ...car, id: 42 })
  })

  it('should give 404 codes for operations on non-existing entities', async () => {
    const getResult = await request(app).get('/car/12345').send()
    expect(getResult.status).toEqual(404)

    const putResult = await request(app).put('/car/12345').send({})
    expect(putResult.status).toEqual(404)

    const deleteResult = await request(app).delete('/car/12345').send({})
    expect(deleteResult.status).toEqual(404)
  })

  afterAll(() => {
    fs.unlinkSync('./test/car.json')
    fs.rmdirSync('./test/')
  })
})
