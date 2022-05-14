import TaskCard from './tasks';

function TasksList() {
  const array = [
    { title: "Testing #1", points: 10 },
    { title: "Testing #1", points: 10 },
    { title: "Testing #1", points: 10 },
    { title: "Testing #1", points: 10 },
    { title: "Testing #1", points: 10 },
    { title: "Testing #1", points: 10 },
  ];

  return (
    <div>
      <div class="section-title">Task list</div>
      <div class="task-list">
        {array.map((element) => (
          <TaskCard title={element.title} points={element.points}></TaskCard>
        ))}
      </div>
    </div>
  );
}

export default TasksList;
