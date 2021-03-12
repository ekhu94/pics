import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
    render() {
        const imgs = this.props.images.map(img => {
            return <ImageCard image={img} key={img.id} />
        });
        return (
            <div className="image-list">
                {imgs}
            </div>
        );
    }
}

export default ImageList;