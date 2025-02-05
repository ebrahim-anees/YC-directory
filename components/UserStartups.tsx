import { client } from '@/sanity/lib/client';
import { ALL_STARTUPS_QUERY_BY_ID } from '@/sanity/lib/queries';
import React from 'react';
import StartupCard, { StartupTypeCard } from './StartupCard';

export default async function UserStartups({ id }: { id: string }) {
  const startups = await client.fetch(ALL_STARTUPS_QUERY_BY_ID, { id });

  return (
    <>
      { startups.length > 0? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup}/>
        ))
      ):(
        <p className="no-result">No posts yet</p>
      )}
    </>
  )
}
