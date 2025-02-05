import { defineQuery } from 'next-sanity';

export const STARTUPS_QUERY = defineQuery(
  `*[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createdAt desc){
  title,
  _id,
  _createdAt,
  pitch,
  slug,
  image,
  category,
  views,
  author -> {
    _id, name, image, bio
  }, 
  description,  
}`
);
export const STARTUP_QUERY_BY_ID = defineQuery(
  `*[_type == 'startup' && _id == $id][0] {
  title,
  _id,
  _createdAt,
  pitch,
  slug,
  image,
  category,
  views,
  author -> {
    _id, name, image, bio, username
  }, 
  description,  
  pitch,
}`
);
export const STARTUP_VIEWS_QUERY_BY_ID = defineQuery(
  `*[_type == 'startup' && _id == $id][0] { 
  _id,
  views,
}`
);
export const ALL_STARTUPS_QUERY_BY_ID = defineQuery(
  `*[_type == 'startup' && author._ref == $id] | order(_createdAt desc)  {  
  title,
  _id,
  _createdAt,
  pitch,
  slug,
  image,
  category,
  views,
  author -> {
    _id, name, image, bio
  }, 
  description,  
}`
);

export const AUTHOR_QUERY_BY_GITHUB_ID = defineQuery(
  `*[_type == 'author' && id == $id][0] { 
  _id,
  id,
  name,
  username,
  email,
  image,
  bio,
}`
);
export const AUTHOR_QUERY_BY_ID = defineQuery(
  `*[_type == 'author' && _id == $id][0] { 
  _id,
  id,
  name,
  username,
  email,
  image,
  bio,
}`
);
export const PLAYLIST_QUERY_BY_SLUG = defineQuery(
  `*[_type == "playlist" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    select[]->{
      _id,
      _createdAt,
      title,
      slug,
      author->{
        _id,
        name,
        slug,
        image,
        bio
      },
      views,
      description,
      category,
      image,
      pitch
    }
  }`
);

