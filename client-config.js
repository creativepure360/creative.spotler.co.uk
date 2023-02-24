import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "tgvb7jy1",
  dataset: "production",
  apiVersion: "2023-02-01",
  token: "",
  useCdn: true,
});

export default client;
