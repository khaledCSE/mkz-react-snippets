import React from 'react';
import { followZoom } from './followZoom';

export const FollowZoomImage = ({ class_name, imagePath }) => {
    const defaultStyles = {
        background: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    const handleZoom = (e) => followZoom(e.target);
    return (
        <div
            className={class_name}
            style={defaultStyles}
            onMouseMove={handleZoom}
        ></div>
    );
};
