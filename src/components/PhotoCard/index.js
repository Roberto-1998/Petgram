import React from 'react';
import { ImgWrapper, Img, Article } from './styles';
import PropTypes from 'prop-types';
import useNearScreen from '../../hooks/useNearScreen';
import FavButton from '../FavButton';
import useToggleLikeMutation from '../../hooks/useToggleLikeMutation';
import { Link } from 'react-router-dom';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, liked, src = DEFAULT_IMAGE }) => {
  const { element } = useNearScreen();
  const { setLike } = useToggleLikeMutation();

  const handleFavClick = () => {
    setLike({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  return (
    <Article ref={element}>
      {true && (
        <>
          {' '}
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];

    if (propValue === 'undefined') {
      return new Error(`${propName}value must be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName}value must be greater than 0`);
    }
  },
};
