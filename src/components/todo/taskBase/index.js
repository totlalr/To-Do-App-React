import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ConditionTaskTable from "./components/conditionTask/index";
import { useState } from "react";

const TaskBase = (props) => {
  //states
  const [value, setValue] = useState("1");

  //Handler
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }} className="p-3">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Done" value="2" />
            <Tab label="InProgress" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ConditionTaskTable todos={props.todos} value={value} />
        </TabPanel>
        <TabPanel value="2">
          <ConditionTaskTable todos={props.todos} value={value} />
        </TabPanel>
        <TabPanel value="3">
          <ConditionTaskTable todos={props.todos} value={value} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TaskBase;
