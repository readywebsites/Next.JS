import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'g85rmsk9', // Replace with your Sanity project ID
  dataset: 'production', // Dataset selected during setup
  useCdn: true, // Use `false` for the freshest data; `true` for caching
  apiVersion: '2023-12-27', // Optional: Specify the API version
});
