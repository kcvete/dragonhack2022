import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function TaskCard(props) {
  const title = props.title;
  const points = props.points;

  return (
    <Card sx={{ display: "flex" }} className="task-card">
      <CardMedia
        component="img"
        className="task-image"
        sx={{ width: 151 }}
        image="https://www.ikea.com/au/en/images/products/monstera-potted-plant-swiss-cheese-plant__0902106_pe640705_s5.jpg?f=s"
        alt="Live from space album cover"
      />
      <div className="card-content">
        <div>
          <span className="task-title">{title}</span>
          <div className="points-row">
            <span className="points-number">{points}</span>
            <span> points</span>
          </div>
        </div>
        <Button variant="contained">Award</Button>
      </div>
    </Card>
  );
}

export default TaskCard;
