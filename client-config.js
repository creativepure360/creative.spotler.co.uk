import {createClient} from "@sanity/client";

const client = createClient({
  projectId: "tgvb7jy1",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: "",
  useCdn: true,
});

export default client;
