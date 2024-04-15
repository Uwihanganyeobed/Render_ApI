// const express=require('express')
import express from 'express'
// const dotenv=require('dotenv')
import dotenv from 'dotenv'
// const cors=require('cors')
import cors from 'cors';
import bodyParser from 'body-parser';
// const bodyParser=require('body-parser')
const PORT=process.env.PORT || 5000
const app=express();

dotenv.config()
app.use(bodyParser.json())
app.use(cors())

app.use('/',(req,res)=>{
  const productApi = [
    {
      "_id": "65fa815d36453f32abfc375a",
      "id": 2,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710915933171.png",
      "category": "women",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:25:33.647+00:00",
      "__v": 0
    },
    {
      "_id": "65fa818736453f32abfc3761",
      "id": 3,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710915974725.png",
      "category": "women",
      "new_price": 80.5,
      "old_price": 50,
      "available": true,
      "date": "2024-03-20T06:26:15.940+00:00",
      "__v": 0
    },
    {
      "_id": "65fa81a236453f32abfc3764",
      "id": 4,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710916000635.png",
      "category": "women",
      "new_price": 100.5,
      "old_price": 60,
      "available": true,
      "date": "2024-03-20T06:26:42.252+00:00",
      "__v": 0
    },
    // Add more products here...
    {
      "_id": "65fa81be36453f32abfc3767",
      "id": 5,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710916028602.png",
      "category": "women",
      "new_price": 150,
      "old_price": 100,
      "available": true,
      "date": "2024-03-20T06:27:10.346+00:00",
      "__v": 0
    },
    {
      "_id": "65fa81db36453f32abfc376a",
      "id": 6,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710916058744.png",
      "category": "women",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:27:39.942+00:00",
      "__v": 0
    },
    {
      "_id": "65fa81ee36453f32abfc376d",
      "id": 7,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710916078173.png",
      "category": "women",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:27:58.645+00:00",
      "__v": 0
    },
    {
      "_id": "65fa81ff36453f32abfc3770",
      "id": 8,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710916093357.png",
      "category": "women",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:28:15.848+00:00",
      "__v": 0
    },
    {
      "_id": "65fa822e36453f32abfc377a",
      "id": 9,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710916140047.png",
      "category": "women",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:29:02.579+00:00",
      "__v": 0
    },
    {
      "_id": "65fa825136453f32abfc377f",
      "id": 10,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710916177342.png",
      "category": "women",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:29:37.832+00:00",
      "__v": 0
    },
    {
      "_id": "65fa826736453f32abfc3782",
      "id": 11,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710916198617.png",
      "category": "women",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:29:59.088+00:00",
      "__v": 0
    },
    {
      "_id": "65fa827636453f32abfc3785",
      "id": 12,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710916212767.png",
      "category": "women",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:30:14.415+00:00",
      "__v": 0
    },
    {
      "_id": "65fa828136453f32abfc3788",
      "id": 13,
      "name": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      "image": "http://localhost:4000/images/product_1710916224323.png",
      "category": "women",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:30:25.930+00:00",
      "__v": 0
    },
    {
      "_id": "65fa837136453f32abfc37ba",
      "id": 14,
      "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      "image": "http://localhost:4000/images/product_1710916463647.png",
      "category": "men",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:34:25.458+00:00",
      "__v": 0
    },
    {
      "_id": "65fa83a836453f32abfc37c3",
      "id": 17,
      "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      "image": "http://localhost:4000/images/product_1710916509453.png",
      "category": "men",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:35:20.007+00:00",
      "__v": 0
    },
    {
      "_id": "65fa83b436453f32abfc37c6",
      "id": 18,
      "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      "image": "http://localhost:4000/images/product_1710916529930.png",
      "category": "men",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:35:32.001+00:00",
      "__v": 0
    },
    {
      "_id": "65fa83bf36453f32abfc37c9",
      "id": 19,
      "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      "image": "http://localhost:4000/images/product_1710916540680.png",
      "category": "men",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:35:43.504+00:00",
      "__v": 0
    },
    {
      "_id": "65fa83cc36453f32abfc37cc",
      "id": 20,
      "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      "image": "http://localhost:4000/images/product_1710916554507.png",
      "category": "men",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:35:56.647+00:00",
      "__v": 0
    },
    {
      "_id": "65fa83db36453f32abfc37cf",
      "id": 21,
      "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      "image": "http://localhost:4000/images/product_1710916569304.png",
      "category": "men",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:36:11.444+00:00",
      "__v": 0
    },
    {
      "_id": "65fa83e936453f32abfc37d2",
      "id": 22,
      "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      "image": "http://localhost:4000/images/product_1710916580860.png",
      "category": "men",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:36:25.178+00:00",
      "__v": 0
    },
    {
      "_id": "65fa83f436453f32abfc37d5",
      "id": 23,
      "name": "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      "image": "http://localhost:4000/images/product_1710916595192.png",
      "category": "men",
      "new_price": 120.5,
      "old_price": 85,
      "available": true,
      "date": "2024-03-20T06:36:36.589+00:00",
      "__v": 0
    }]
  
   res.json(productApi)
})
app.listen(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))