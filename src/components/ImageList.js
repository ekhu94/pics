import './ImageList.css';
import React from 'react';

const ImageList = props => {
    const imgs = props.images.map(({ id, alt_description, urls }) => {
        return <img key={id} src={urls.regular} alt={alt_description} />
    });
    return <div className="image-list">{imgs}</div>
}

export default ImageList;