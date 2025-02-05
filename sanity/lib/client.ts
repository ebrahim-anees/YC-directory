import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  /// when it is false = fetching the new data immediately after (refresh)
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
