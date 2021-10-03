import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "../store/action/game";
export default function ColorTabs() {
  const [value, setValue] = React.useState("one");
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state?.listGames?.allGameList);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", color: "#046860" }}>
      <Tabs value={value} onChange={handleChange} centered indicatorColor="primary" aria-label="secondary tabs example">
        <Tab value="one" label="Previous Page" onClick={() => dispatch(getGame(games?.page - 1))} />
        <Tab value="two" label="Page One" onClick={() => dispatch(getGame(1))} />
        <Tab value="three" label="Page Two" onClick={() => dispatch(getGame(2))} />
        <Tab value="four" label="Page Three" onClick={() => dispatch(getGame(3))} />
        <Tab value="five" label="Next Page" onClick={() => dispatch(getGame(games?.page + 1))} />
      </Tabs>
    </Box>
  );
}
