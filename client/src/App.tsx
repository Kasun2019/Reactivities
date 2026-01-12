import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivites] = useState<Activity[]>([]);

  useEffect(() => {
    // fetch("https://localhost:5001/API/Activity")
    //   .then((response) => response.json())
    //   .then((data) => setActivites(data));

    axios.get("https://localhost:5001/API/Activity")
      .then(response => setActivites(response.data));

    return () => {};
  }, []);
  return (
    <>
      <Typography className="app" style={{ color: "red" }}>
        Reactivities
      </Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
