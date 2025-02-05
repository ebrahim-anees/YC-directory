import Ping from './Ping';
import { STARTUP_VIEWS_QUERY_BY_ID } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/write-client';
import { after } from 'next/server';

export default async function View({ id }: { id: string }) {
  const data = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY_BY_ID, { id });
  const totalViews = data?.views || 0;

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );
  return (
    <>
      <div className="view-container">
        <div className="absolute -top-2 -right-2 ">
          <Ping />
        </div>
        <p className="view-text">
          <span className="font-black">
            {totalViews} view{totalViews == 1 ? '' : 's'}
          </span>
        </p>
      </div>
    </>
  );
}
