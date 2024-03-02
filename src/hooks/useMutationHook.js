import { useMutation } from "@tanstack/react-query";

const useMutationHook = (cb) => {
  const mutation = useMutation({
    mutationFn: cb,
  });

  return mutation;
};

export default useMutationHook;
