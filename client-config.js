import {createClient} from "@sanity/client";

const client = createClient({
  projectId: "tgvb7jy1",
  dataset: "production",
  apiVersion: "2023-02-01",
  token: "",
  useCdn: true,
});

export default client;
