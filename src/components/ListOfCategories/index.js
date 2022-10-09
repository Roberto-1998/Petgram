import React, { useState, useEffect } from 'react';
import useCategoriesData from '../../hooks/useCategoriesData';
import { Category } from '../Category';
import { List, Item } from './styles';

export const ListOfCategories = () => {
  const { isLoading, categories } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  );

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
