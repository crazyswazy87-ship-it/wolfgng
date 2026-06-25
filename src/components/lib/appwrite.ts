import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1") // or your self-hosted URL
  .setProject("69c4aae10028a248e84f");

export const databases = new Databases(client);

export const DATABASE_ID = "69c74f32000da666874f";
export const WAITLIST_COLLECTION_ID = "waitlist";
export { ID };