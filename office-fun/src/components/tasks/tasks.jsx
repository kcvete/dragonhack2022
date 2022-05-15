import './tasks.css';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { NavLink } from 'react-router-dom';


function TaskCard(props) {
  return (
    <Card sx={{ display: "flex" }} className="task-card">
      <CardMedia
        component="img"
        className="task-image"
        image={props.image}
        alt="Live from space album cover"
      />
      <div className="card-content">
        <div>
          <span className="task-title">{props.title}</span>
          <div className="points-row">
            <span className="points-number">{props.points}</span>
            <span> points</span>
          </div>
        </div>
        <NavLink to={"../task-details/" + props.id}>
          <Button variant="contained">Award</Button>
        </NavLink>
      </div>
    </Card>
  );
}

export default TaskCard;
