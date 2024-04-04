import { createClient } from "contentful";

export async function getContent({ content_type, ...rest }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env,
  });
}
