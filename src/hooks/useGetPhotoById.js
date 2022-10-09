import { gql, useQuery } from '@apollo/client';

const GET_PHOTO_BY_ID = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

const useGetPhotoById = (id) => {
  const { data, error, loading } = useQuery(GET_PHOTO_BY_ID, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};

export default useGetPhotoById;
