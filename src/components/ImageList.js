import React from 'react';

const ImageList = props => {
    const imgs = props.images.map(img => {
        return <img style={{width: '200px', margin: '10px'}} src={img.urls.regular} alt={img.alt_description} />
    });
    return <div>{imgs}</div>
}

export default ImageList;