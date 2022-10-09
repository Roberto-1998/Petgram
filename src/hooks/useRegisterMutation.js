import { gql, useMutation } from '@apollo/client';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const useRegisterMutation = (onSubmit) => {
  const [register, { data, error, loading }] = useMutation(REGISTER);

  const handleRegister = (payload) => {
    return register({
      variables: payload,
    }).then((res) => {
      onSubmit(res.data.signup);
    });
  };

  return { handleRegister, data, error, loading };
};

export default useRegisterMutation;
