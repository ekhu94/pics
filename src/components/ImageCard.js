import React from 'react';

class ImageCard extends React.Component {
    render() {
        const { alt_description, urls } = this.props.image;
        return (
            <img src={urls.regular} alt={alt_description} />
        );
    }
}

export default ImageCard;