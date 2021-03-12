import './ImageList.css';
import React from 'react';

class ImageList extends React.Component {
    render() {
        const imgs = this.props.images.map(({id, alt_description, urls}) => {
            return <img key={id} src={urls.regular} alt={alt_description} />
        });
        return (
            <div className="image-list">
                {imgs}
            </div>
        );
    }
}

export default ImageList;