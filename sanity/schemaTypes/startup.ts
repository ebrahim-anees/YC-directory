import { defineField, defineType } from 'sanity';

export const startup = defineType({
  name: 'startup',  /// Internal identifier used in queries and relationships.
  title: 'Startup', /// Human-readable name displayed in Sanity Studio.
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
      name: 'author',
      type: 'reference',
      to: {
        type: 'author',
      },
    }),
    defineField({
      name: 'views',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'text', /// allows for longer content compared to string.
    }),
    defineField({
      name: 'category',
      type: 'string',
      validation: (Rule) =>
        Rule.min(1).max(20).required().error('Please enter a category'),
    }),
    defineField({
      name: 'image',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pitch',
      type: 'markdown',
    }),
  ],
});