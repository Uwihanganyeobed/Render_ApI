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
      "id": "660971837d4adc2b4f09e998",
      "productCategory": "Clothing",
      "productName": "Dress",
      "productQuantity": "10",
      "productDescription": "Fashionable dress for parties"
    },
    {
      "id": "660971837d4adc2b4f09e999",
      "productCategory": "Books",
      "productName": "The Great Gatsby",
      "productQuantity": "5",
      "productDescription": "Classic novel by F. Scott Fitzgerald"
    },
    {
      "id": "660971837d4adc2b4f09e99a",
      "productCategory": "Grocery",
      "productName": "Apples",
      "productQuantity": "20",
      "productDescription": "Fresh apples from local orchard"
    },
    {
      "id": "660971837d4adc2b4f09e99b",
      "productCategory": "Furniture",
      "productName": "Sofa",
      "productQuantity": "3",
      "productDescription": "Comfortable sofa for your living room"
    }
  ];
  
   res.json(productApi)
})
app.listen(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))