import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import useGetPhotoById from '../hooks/useGetPhotoById';

export const PhotoCardWithQuery = ({ id }) => {
  const { data, error, loading } = useGetPhotoById(id);

  if (error) return <h1>Just an error</h1>;

  if (loading) return <h1>Loading...</h1>;

  return <PhotoCard {...data.photo} />;
};
