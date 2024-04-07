const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const bodyParser=require('body-parser')
const PORT=process.env.PORT || 3000
const app=express();

dotenv.config()
app.use(bodyParser.json())
app.use(cors())

app.use('/',(req,res)=>{
   const productApi=[
   {
     "id": "660971837d4adc2b4f09e997",
     "productCategory": "Electronics",
     "productName": "Curry",
     "productQuantity": "7",
     "productDescription": "This was imported from dubai"
   },
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
 ]
   res.json(productApi)
})
app.listen(()=>app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))