import { createClient } from "contentful";

const getContent = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: "cdn.contentful.com",
  });

  const getOpporunities = async () => {
    try {
      /* Fetch entries from Contentful that have the content type 'opportunities'
       Only select the 'fields' property of each entry */

      const entries = await client.getEntries({
        content_type: "opportunities",
        select: "fields",
      });

      /* Map over the items in the entries
       For each item, extract the title, description, program, month, and image URL from the fields
       Return a new object with these properties */

      const sanitizedEntries = entries.items.map((items) => {
        const title = items.fields.title;
        const description = items.fields.description;
        const program = items.fields.program;
        const month = items.fields.month;
        const image = items.fields.image.fields.file.url;
        const slug = items.fields.slug;

        return { title, description, program, month, image, slug };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching data : ${error}`);
    }
  };

  return { getOpporunities };
};

export default getContent;
