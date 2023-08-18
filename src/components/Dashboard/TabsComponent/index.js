import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import GridComponent from '../GridComponent';
import "./style.css";

function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    color: "white",
    backgroundColor: "#1b1b1b",
    marginTop: "20px",
  }

  const theme = createTheme({
    palette: {
        primary: {
            main: '#8a3ffc',
        }
    },
    });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid View" value="grid" sx={styles} />
            <Tab label="List View" value="list" sx={styles} />
          </TabList>
        </div>
        <TabPanel className='grid-view' value="grid">
            {coins.map((coin, id) =>{
              return <GridComponent key={id} coin={coin} />
            } )}
        </TabPanel>
        <TabPanel value="list">Item Two</TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}

export default TabsComponent;