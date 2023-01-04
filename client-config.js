import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "w5xsgj13",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: "",
  useCdn: true,
});

export default client;
