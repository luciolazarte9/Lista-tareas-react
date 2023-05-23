import ItemTarea from './ItemTarea';
import { ListGroup } from 'react-bootstrap';

const ListaTarea = () => {
    return (
        <ListGroup>
            <ItemTarea></ItemTarea>
            <ItemTarea></ItemTarea>
            <ItemTarea></ItemTarea>
            <ItemTarea></ItemTarea>
        </ListGroup>
    );
};

export default ListaTarea;