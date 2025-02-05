import { defineField, defineType } from 'sanity';

export const playlist = defineType({
  name: 'playlist', /// Internal identifier used in queries and relationships.
  title: 'Playlists', /// Human-readable name displayed in Sanity Studio.
  type: 'document', /// Indicates that this is a main entity (not a field inside another schema).
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'select',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{
            type: 'startup',
          }],
        },
      ],
    }),
  ],
});
