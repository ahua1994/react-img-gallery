import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import "./Gallery.css";

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch(`https://cwbarry.pythonanywhere.com/image/`)
            .then(data => data.json())
            .then(data => setPhotos(data));
    }, []);
    const { images } = photos;
    return (
        <div className="gallery">
            {images ? (
                images.map(({ photographer, src }, i) => {
                    return (
                        <div className="frame" key={i}>
                            <p className="name">{photographer}</p>
                            <img src={src.large} alt={photographer} />
                        </div>
                    );
                })
            ) : (
                <Spinner></Spinner>
            )}
        </div>
    );
};

export default Gallery;
