import React from 'react';
import ListOfFavs from '../components/ListOfFavs';
import { Layout } from '../components/Layout';
import useGetFavs from '../hooks/useGetFavs';

const Favs = () => {
  const { data, error, loading } = useGetFavs();

  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Layout
        title={'Petgram - Tus favoritos'}
        subtitle={'Aquí puedes encontrar tus favoritos'}
      >
        <ListOfFavs favs={data.favs} />
      </Layout>
    </>
  );
};

export default Favs;
