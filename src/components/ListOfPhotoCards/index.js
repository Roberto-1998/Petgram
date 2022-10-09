import React from 'react';
import { PhotoCard } from '../PhotoCard';
import useGetPhotos from '../../hooks/useGetPhotos';
import { List } from './styles';

export const ListOfPhotoCards = ({ categoryId }) => {
  const { error, loading, data } = useGetPhotos(categoryId);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Ups.. Something went wrong</div>;

  return (
    <List>
      {data.photos.map((photo) => {
        return <PhotoCard key={photo.id} {...photo} />;
      })}
    </List>
  );
};
