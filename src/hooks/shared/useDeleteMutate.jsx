import { useMutation, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import useAxiosSecure from '../useAxios';

const useDeleteMutate = (
  route,
  onSuccess= () => {},
  onError = () => {}
) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get('user');
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id) =>
      Axios.delete(route + id, {
        headers: {
          Authorization: token,
        },
      }),
    onSuccess: (mutatedData) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.invalidateQueries({ queryKey: ['test'] });
      queryClient.invalidateQueries({ queryKey: ['banners'] });

      console.log(mutatedData);
      onSuccess(mutatedData);
    },
    onError: (err) => {
      console.log(err);
      onError(err);
    },
  });

  return { mutate, isPending };
};

export default useDeleteMutate;
