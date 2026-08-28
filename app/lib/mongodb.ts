import { MongoClient } from "mongodb";

const configuredUri = process.env.MONGODB_URI || process.env.MONGO_URI;
const uri =
  configuredUri && !configuredUri.includes("replace_with_your_mongodb_uri")
    ? configuredUri
    : undefined;

if (!uri) {
  console.warn("MONGODB_URI or MONGO_URI is not set. Requirement submissions will fail until it is configured.");
}

declare global {
  // eslint-disable-next-line no-var
  var mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getMongoClient() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (!global.mongoClientPromise) {
    const client = new MongoClient(uri);
    global.mongoClientPromise = client.connect();
  }

  return global.mongoClientPromise;
}

export async function getPortfolioDb() {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB || "ravi_portfolio");
}
