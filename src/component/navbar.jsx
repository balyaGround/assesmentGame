import * as React from "react";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { getGame } from "../store/action/game";
import axios from "axios";
export default function ColorTabs() {
  const [value, setValue] = React.useState("one");
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", color: "#046860" }}>
      <Tabs value={value} onChange={handleChange} centered indicatorColor="primary" aria-label="secondary tabs example">
        <Tab value="one" label="Page 1" onClick={() => dispatch(getGame(1))} />
        <Tab value="two" label="Page 2" onClick={() => dispatch(getGame(2))} />
        <Tab value="three" label="Page 3" onClick={() => dispatch(getGame(3))} />
        <Tab value="for" label="Page 4" onClick={() => dispatch(getGame(4))} />
        <Tab value="five" label="Page 5" onClick={() => dispatch(getGame(5))} />
        <Tab value="six" label="Page 6" onClick={() => dispatch(getGame(6))} />
        <Tab value="seven" label="Page 7" onClick={() => dispatch(getGame(7))} />
        <Tab value="eight" label="Page 8" onClick={() => dispatch(getGame(8))} />
        <Tab value="nine" label="Page 9" onClick={() => dispatch(getGame(9))} />
        <Tab value="ten" label="Page 10" onClick={() => dispatch(getGame(10))} />
      </Tabs>
    </Box>
  );
}
