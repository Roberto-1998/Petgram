import { gql, useMutation, resetCaches } from '@apollo/client';

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

const useToggleLikeMutation = () => {
  const [setLike, { data, loading, error }] = useMutation(LIKE_PHOTO, {
    resetCaches,
  });

  return { data, setLike, loading, error };
};

export default useToggleLikeMutation;
