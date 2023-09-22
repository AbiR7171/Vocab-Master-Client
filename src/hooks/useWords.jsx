import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Authentication/Provider/AuthProvider";

const useWords = () => {
  const { loading } = useContext(AuthContext);

  const { data: words = [], refetch } = useQuery({
    queryKey: ["words"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        "https://vocab-master-server-new.vercel.app/words"
      );
      return res.data;
    },
  });

  return [words, refetch];
};

export default useWords;
