const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://jpurnel4:swagswag23@cluster0.8oikk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        // Access a specific database (replace 'testDatabase' with your database name)
        const database = client.db("testDatabase");
        const collection = database.collection("testCollection");

        // Insert a sample document
        const result = await collection.insertOne({ name: "Test User", age: 30 });
        console.log("Document inserted with ID:", result.insertedId);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    } finally {
        await client.close();
    }
}

run();
