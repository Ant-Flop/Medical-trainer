import {React, useState} from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@mui/material/Typography";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";
import {GroupStatisticTable} from "./GroupStatisticTable";
import {StudentTable} from "./StudentTable";







export const TabsBar = (props) => {
    const [value, setValue] = useState(0)



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const {children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: "80vh" }}
        >
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                orientation={"vertical"}
                onChange={handleChange}
                aria-label="disabled tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Студенти"/>

                <Tab label="Статистика по групам"/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <StudentTable rerender={props.rerender}/>
            </TabPanel>
            <TabPanel value={value}  index={1}>
                <GroupStatisticTable />
            </TabPanel>
        </Box>
    )

}