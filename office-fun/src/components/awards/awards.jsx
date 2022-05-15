import './awards.css';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { NavLink } from 'react-router-dom';

function AwardCard(props) {
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem("title-reward", props.title);
    localStorage.setItem("points-reward", props.points);
    localStorage.setItem("id-reward", props.id);
    localStorage.setItem("image-reward", props.image);
  };

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
        <NavLink
          className="normal-text-link"
          to={"../award-details/" + props.id}
        >
          <Button onClick={saveToLocalStorage} variant="contained">
            Redeem
          </Button>
        </NavLink>
      </div>
    </Card>
  );
}

export default AwardCard;
