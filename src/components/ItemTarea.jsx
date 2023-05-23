import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = () => {
    return (
    <ListGroup.Item className="d-flex justify-content-between">
        Ejemplo tarea
        <Button variant="danger">Borrar</Button>
    </ListGroup.Item>
    );
};

export default ItemTarea;