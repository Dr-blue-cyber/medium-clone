import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { AppBar, Box, Button, Divider, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Tab, TextField, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import AddCommentIcon from '@mui/icons-material/AddComment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Panel1 } from './Panel1';
import { PostCard } from '../../components/PostCard';

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Grid>
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <IconButton color='inherit' sx={{ m: 2 }} size='large' aria-label='menu'>
              <MenuIcon></MenuIcon>
            </IconButton>

            <Box flexGrow={1} >
              <FormControl sx={{ m: 1, color: "white" }} variant='standard'>
                <Input
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">< SearchIcon /></InputAdornment>}
                  placeholder='Search'

                />
              </FormControl>
            </Box>


            <IconButton color='inherit' sx={{ marginInline: 2 }} size='large' aria-label='menu' onClick={() => { navigate("/new-story") }}>
              <AddCommentIcon titleAccess='Write'></AddCommentIcon >
              <Typography variant='body1' sx={{ marginInline: 2 }}> Write</Typography>
            </IconButton>
            <IconButton color='inherit'>
              <NotificationsIcon />
            </IconButton>
            <IconButton color='inherit'>
              <Button color="inherit" onClick={() => { navigate('/logout') }}>Logout</Button>
            </IconButton>

          </Toolbar>
        </AppBar>
      </Box>

      <Grid display={'flex'}>

        <Box m={2} ml={6} width={'60vw'}>
          <Tabs />
        </Box>
        <Divider orientation='vertical' flexItem />
        <Box m={2} p={2} width={'30vw'}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam enim voluptatum, quisquam odio in commodi consectetur accusantium nisi, dolor aut aliquam. Aperiam adipisci nisi, dolores maxime incidunt distinctio consequuntur ipsum qui consequatur architecto suscipit modi. Laborum commodi eius quasi aliquam nam provident voluptatibus dignissimos, ducimus debitis eum facilis corrupti quibusdam deleniti excepturi, iste architecto! Est fugit amet officia voluptatum cupiditate quisquam optio qui expedita blanditiis ea! Doloremque qui voluptates ex optio culpa ducimus accusantium veritatis dicta dolorem eos, ratione vitae quia sit nam in quidem, unde vel alias repellendus beatae autem. Sequi reprehenderit autem non similique nobis sint porro distinctio assumenda neque, libero in saepe consequuntur! Maiores, sit? Provident magnam nam explicabo harum laboriosam consequatur saepe quidem temporibus distinctio debitis. Laborum corrupti unde expedita accusantium. Iusto officiis nulla amet repudiandae, recusandae laudantium quisquam. Voluptatem consequatur quam temporibus aspernatur facilis perspiciatis animi saepe, excepturi sit deserunt cum quibusdam dolore nulla dolor nostrum nam. Delectus harum quo ullam esse sequi quos provident vel nemo magni! Corrupti vitae suscipit, pariatur culpa laudantium quos fugit, nihil commodi ut dignissimos sunt nobis beatae, tempore rerum maiores. Est laborum soluta dicta voluptas, nemo a accusamus magni ipsa optio ex amet, eveniet rerum beatae perferendis ipsam repellat quas velit eaque iusto nostrum consequuntur. Rem cupiditate cum itaque quas numquam libero ex, sit nam ipsam repudiandae impedit atque tempore harum obcaecati delectus fuga quisquam velit illo provident? Pariatur neque, obcaecati inventore, iure at, reprehenderit adipisci eligendi molestias ut illo architecto! Eius, voluptatibus accusamus quo vel autem libero molestias exercitationem iure ipsum magni pariatur, quis quam mollitia in laudantium commodi inventore consequuntur suscipit consectetur repellendus impedit, debitis dolores! Harum, at placeat saepe animi molestias nostrum in amet, vel quisquam temporibus ex distinctio, neque impedit illo porro consequuntur. Tempora corporis fuga exercitationem laborum velit quae non aperiam eum ea totam at vero rem aliquid necessitatibus, itaque pariatur porro voluptates numquam commodi, laudantium quam possimus. Ducimus nesciunt cum quas vel perferendis dolores rem saepe, minus alias nulla asperiores voluptatum unde earum sunt, ea tempora, voluptates laborum. Doloremque nemo error eveniet accusamus aliquam officiis itaque necessitatibus, quaerat dolore facere neque magni, cumque doloribus fuga dolor sunt quo dolorum. Officia aliquam consectetur, illo saepe labore tempora dolores autem vitae illum totam iste assumenda adipisci nesciunt laudantium, mollitia nihil cupiditate facere dicta incidunt animi explicabo minus inventore libero! Temporibus minus dolorum, reiciendis rem delectus sequi odio, officia voluptatibus sunt aliquam repellendus sint nobis quibusdam.
        </Box>
      </Grid>
    </Grid>
  )
}


const Tabs = () => {
  const [selctedTab, setSelctedTab] = useState(1);

  const onChangeTab = (event, newValue) => {
    setSelctedTab(newValue);
  };
  return (
    <Box >
      <TabContext value={selctedTab} >
        <Box color={"inherit"} sx={{ borderBottom: 1, borderColor: 'divider', position: "sticky" }}>
          <TabList centered={true} variant="scrollable" scrollButtons="auto" color={"inherit"} aria-label='tab-list' textColor='primary' indicatorColor='primary' onChange={onChangeTab}>
            <Tab label="+" value='0' />
            <Tab label="Python" value='1' />
            <Tab label={"JavaScript"} value='2' />
            <Tab label={"React"} value='3' />
            <Tab label={"System Design"} value='4' />
          </TabList>
        </Box>
        <TabPanel value='0'><Panel1 /></TabPanel>
        <TabPanel value='1'><PostCard /></TabPanel>
        <TabPanel value='2'>Panel Two</TabPanel>
        <TabPanel value='3'>Panel Three</TabPanel>
        <TabPanel value='4'>Panel Four</TabPanel>
      </TabContext>
    </Box >
  )
}

const tabs = ["For you", "following", "Python", "JavaScript", "React", "System Design"]

const article = [{
  heading: "Top 15 Software Development Trends in 2024",
  summarry: "As we step into 2024, the landscape of software development continues to evolve exponentially, driven by technological innovations and changing market needs. For businesses and developers alike, staying",
  profilePhoto: "url",
  userName: "Serokell",
  tags: ["Software Development"],
  createdDate: "12 Dec 2023",
  readingSpan: "4 min",
  imagePost: "url"
}]




