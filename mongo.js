

import {MongoClient} from 'mongodb'

// Your MongoDB Atlas connection string
const uri = "mongodb+srv://aritrapandit67:jBdF3kDd04LP7h5S@community-cart.cbq3w.mongodb.net/";

const client = new MongoClient(uri);

const products = [
  { "name": "Laptop", "price": 899.99 },
  { "name": "Smartphone", "price": 699.99 },
  { "name": "Headphones", "price": 149.99 },
  { "name": "Smartwatch", "price": 199.99 },
  { "name": "Tablet", "price": 329.99 },
  { "name": "Monitor", "price": 249.99 },
  { "name": "Keyboard", "price": 79.99 },
  { "name": "Mouse", "price": 49.99 },
  { "name": "External Hard Drive", "price": 109.99 },
  { "name": "Printer", "price": 179.99 },
  { "name": "Wireless Charger", "price": 39.99 },
  { "name": "Gaming Chair", "price": 229.99 },
  { "name": "Webcam", "price": 89.99 },
  { "name": "Bluetooth Speaker", "price": 59.99 },
  { "name": "Smart Home Hub", "price": 129.99 },
  { "name": "Fitness Tracker", "price": 99.99 },
  { "name": "Portable SSD", "price": 139.99 },
  { "name": "E-Reader", "price": 119.99 },
  { "name": "Action Camera", "price": 249.99 },
  { "name": "Drone", "price": 599.99 }
];

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");

    const database = client.db("test");
    const collection = database.collection("products");

    // Insert multiple documents into the collection
    const result = await collection.insertMany(products);

    console.log(`${result.insertedCount} products inserted successfully!`);
  } finally {
    await client.close();
  }
}

run().catch(console.error);