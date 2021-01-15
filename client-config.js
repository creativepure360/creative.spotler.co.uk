import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "w5xsgj13",
  dataset: "production",
  token: "",
  useCdn: true,
});

export default client;
