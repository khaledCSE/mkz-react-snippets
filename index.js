import React from 'react';
import { followZoom } from './followZoom';

export const FollowZoomImage = ({ class_name, imagePath }) => {
    const handleZoom = (e) => followZoom(e.target);
    return (
        <div
            className={class_name}
            style={{ background: `url(${imagePath})` }}
            onMouseMove={handleZoom}
        ></div>
    );
};
