import logo from '@/assets/logo.png';
import Pro360 from '@/assets/Pro360.png';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import EventIcon from '@mui/icons-material/Event';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import {
  AppBar,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import useStyles from './style';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 280;
const sideBarList = [
  {
    displayName: 'Home',
    activeIcon: <HomeIcon htmlColor='#4D9EFE' />,
    outlineIcon: <HomeOutlinedIcon />,
    href: '/',
  },
  {
    displayName: 'Calendar',
    activeIcon: <EventIcon htmlColor='#4D9EFE' />,
    outlineIcon: <EventOutlinedIcon />,
    href: '/Calendar',
  },
  {
    displayName: 'Bookmark',
    activeIcon: <BookmarksIcon htmlColor='#4D9EFE' />,
    outlineIcon: <BookmarksOutlinedIcon />,
    href: '/Bookmark',
  },
  {
    displayName: 'Notification',
    activeIcon: <NotificationsIcon htmlColor='#4D9EFE' />,
    outlineIcon: <NotificationsOutlinedIcon />,
    href: '/Notification',
  },
  {
    displayName: 'Your posts',
    activeIcon: <StickyNote2Icon htmlColor='#4D9EFE' />,
    outlineIcon: <StickyNote2OutlinedIcon />,
    href: '/YourPosts',
  },
];

const StyledListItem = styled(ListItem)(() => ({
  '&.MuiListItem-root': {
    paddingTop: 4,
    paddingBottom: 4,
  },
}));

const StyledListItemButton = styled(ListItemButton)(() => ({
  '&.MuiListItemButton-root': {
    borderRadius: 50,
  },
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface IMainLayoutProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
}

export default function MainLayout({ title, ...props }: IMainLayoutProps) {
  const [isOpen, setIOpen] = React.useState(false);
  const classes = useStyles();

  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  const queryMin1200 = useMediaQuery('(min-width: 1200px)');

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIOpen(open);
    };

  const renderSideBarContent = () => (
    <Box
      sx={{ width: drawerWidth }}
      className={classes.sideBar}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <img
        src={Pro360.src}
        onClick={() => handleClick('/')}
        alt='Pro360'
        className={classes.logo}
      />
      <List>
        {sideBarList.map((item) => (
          <StyledListItem
            onClick={() => {
              console.log(item.displayName);
            }}
            key={item.displayName}
          >
            <div
              onClick={() => handleClick(item.href)}
              className={classes.sidebarItemWrap}
            >
              <StyledListItemButton>
                {router.asPath === item.href
                  ? item.activeIcon
                  : item.outlineIcon}
                <Typography
                  className={classes.sideBarItemText}
                  sx={{
                    color: router.asPath === item.href ? '#4D9EFE' : 'black',
                  }}
                >
                  {item.displayName}
                </Typography>
              </StyledListItemButton>
            </div>
            {/* </Link> */}
          </StyledListItem>
        ))}
      </List>

      <div className={classes.accountWrap}>
        <Avatar
          alt='Trần Văn Thắng'
          src={logo.src}
          sx={{ width: 45, height: 45 }}
        />
        <div className={classes.infoWrap}>
          <div className={classes.accountName}>Trần Văn Thắng</div>
          <div className={classes.accountEmail}>
            thangquyvanthao2000@gmail.com
          </div>
        </div>
        <IconButton>
          <KeyboardArrowUpOutlinedIcon />
        </IconButton>
      </div>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }} className='wrap-box'>
      <Box>
        <Drawer
          variant={queryMin1200 ? 'permanent' : 'temporary'}
          anchor='left'
          open={queryMin1200 ? true : isOpen}
          onClose={toggleDrawer(false)}
          className={classes.sidebarWrap}
        >
          {renderSideBarContent()}
        </Drawer>
      </Box>
      <Box>
        {/* <Button onClick={toggleDrawer(true)}>'left'</Button> */}
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{ display: queryMin1200 ? 'none' : 'flex' }}
        >
          <MenuIcon />
        </IconButton>
        {props.children}
      </Box>
    </Box>
  );
}
