import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const GalleryItem = ({
    id,
    category,
    title,
    imageUrl
}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {category}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
}

export default GalleryItem;