import { createClient } from "contentful";

const getContent = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: "cdn.contentful.com",
  });

  const getOpporunities = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "opportunities",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((items) => {
        const title = items.fields.title;
        const description = items.fields.description;
        const program = items.fields.program;
        const month = items.fields.month;
        const image = items.fields.image.fields.file.url;

        return { title, description, program, month, image };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching data : ${error}`);
    }
  };

  return { getOpporunities };
};

export default getContent;
