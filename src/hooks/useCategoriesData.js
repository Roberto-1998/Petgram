import { useEffect, useState } from 'react';

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window
      .fetch(`https://petgram-server-roberto-1998.vercel.app/categories`)
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
        setLoading(false);
      });
  }, []);

  return {
    categories,
    isLoading,
  };
};

export default useCategoriesData;
