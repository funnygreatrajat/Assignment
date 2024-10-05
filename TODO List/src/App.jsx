import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Function to add a new task
  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask(""); // Clear input field
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Function to toggle task completion
  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        To-Do List
      </Typography>

      <div style={{ display: "flex", marginBottom: "20px" }}>
        <TextField
          variant="outlined"
          label="New Task"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTask}
          style={{ marginLeft: "10px" }}
        >
          Add
        </Button>
      </div>

      <List>
        {todos.map((todo, index) => (
          <ListItem key={index} dense>
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleCompletion(index)}
            />
            <ListItemText
              primary={todo.text}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            />
            <IconButton edge="end" onClick={() => deleteTask(index)}>
              <DeleteIcon color="error" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;
