import React from 'react';

const ImageList = props => {
    const imgs = props.images.map(({ id, alt_description, urls }) => {
        return <img key={id} style={{width: '200px', margin: '10px'}} src={urls.regular} alt={alt_description} />
    });
    return <div>{imgs}</div>
}

export default ImageList;