import { gql, useMutation } from '@apollo/client';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const useLoginMutation = (onSubmit) => {
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleLogin = (payload) => {
    return login({
      variables: payload,
    }).then((res) => {
      onSubmit(res.data.login);
    });
  };

  return { data, handleLogin, loading, error };
};

export default useLoginMutation;
