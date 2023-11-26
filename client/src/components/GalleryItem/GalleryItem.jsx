import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const GalleryItem = ({
    picId,
    title,
    imageUrl
}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button as={Link} to={`/gallery/${picId}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default GalleryItem;



