import { gql, useQuery } from '@apollo/client';

const GET_FAVS = gql`
  query getFavs {
    favs {
      categoryId
      id
      src
      likes
      userId
    }
  }
`;

const useGetFavs = () => {
  const { data, loading, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'network-only',
  });

  return {
    data,
    loading,
    error,
  };
};

export default useGetFavs;
