const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb://simon:maranatha@ac-fg201kz-shard-00-00.ncd0w0d.mongodb.net:27017,ac-fg201kz-shard-00-01.ncd0w0d.mongodb.net:27017,ac-fg201kz-shard-00-02.ncd0w0d.mongodb.net:27017/Cluster0/?ssl=true&replicaSet=atlas-ra3uj4-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  client.close();
});
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try 
    {
      await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
  } 
}
run().catch(console.dir);
