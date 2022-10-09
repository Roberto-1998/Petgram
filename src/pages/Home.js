import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { useParams } from 'react-router';
import { Layout } from '../components/Layout';

const Home = () => {
  const { id } = useParams();

  return (
    <>
      <Layout
        title={'Petgram - tu app de fotos de mascotas'}
        subtitle={
          'Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'
        }
      >
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
      </Layout>
    </>
  );
};

export default Home;
