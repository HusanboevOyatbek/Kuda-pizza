import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ alt, height = '', width = '', src, className = '', ...props }) => (
    <div>
        <LazyLoadImage
            alt={alt}
            src={src} // use normal <img> attributes as props
            className={`${height} ${width} ${className}`.trim()}
            effect="blur"
            {...props}
        />
    </div>
);

export default MyImage;