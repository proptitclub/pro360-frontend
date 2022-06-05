import logo from '@/assets/logo.png';
import Pro360 from '@/assets/Pro360.png';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import EventIcon from '@mui/icons-material/Event';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import * as React from 'react';
import useStyles from './style';
import SideBarCalendar from '@/components/SideBarCalendar';

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

const footerList = [
  {
    displayName: 'Profile',
    href: '/Profile',
  },
  {
    displayName: 'Setting',
    href: '/Setting',
  },
  {
    displayName: 'Help',
    href: '/Help',
  },
  {
    displayName: 'Terms and privacy',
    href: '/TermsAndPrivacy',
  },
  {
    displayName: 'Log out',
    href: '/Logout',
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

interface IMainLayoutProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
}

export default function MainLayout({ title, ...props }: IMainLayoutProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [footerOpen, setFooterOpen] = React.useState(false);
  const classes = useStyles();

  const router = useRouter();

  const queryMin1200 = useMediaQuery('(min-width: 1200px)');

  const handleSidebarItemClick = (route: string) => {
    router.push(route);
    setFooterOpen(false);
  };

  const handleFooterItemClick = (route?: string) => {
    console.log('footer item click: ', router);
    setFooterOpen(false);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsOpen(open);
    };

  const toggleFooter = (open: boolean) => {
    setFooterOpen(open);
  };

  const renderSideBarContent = () => (
    <Box className={classes.sideBar} role='presentation'>
      <a href='/'>
        <img
          src={Pro360.src}
          // onClick={() => handleSidebarItemClick('/')}
          alt='Pro360'
          className={classes.logo}
        />
      </a>

      <div className={classes.sideBarCenterContent}>
        <List className={classes.sidebarList}>
          {sideBarList.map((item) => (
            <StyledListItem
              onClick={() => {
                console.log(item.displayName);
              }}
              key={item.displayName}
            >
              <div
                onClick={() => handleSidebarItemClick(item.href)}
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
            </StyledListItem>
          ))}
        </List>
        <SideBarCalendar />
      </div>

      <div className={classes.sidebarFooter}>
        <div
          className={classes.footerWrap}
          style={{
            transform: footerOpen
              ? `translateY(${-72 - 256}px)`
              : `translateY(${-72}px)`,
            boxShadow: footerOpen
              ? '0px -1px 10px 2px  rgba(0, 0, 0, 0.08)'
              : 'unset',
          }}
        >
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
            <IconButton onClick={() => toggleFooter(!footerOpen)}>
              {footerOpen ? (
                <KeyboardArrowDownOutlinedIcon />
              ) : (
                <KeyboardArrowUpOutlinedIcon />
              )}
            </IconButton>
          </div>
          <List>
            {footerList.map((item) => (
              <StyledListItem
                onClick={() => {
                  console.log(item.displayName);
                }}
                key={item.displayName}
              >
                <div
                  onClick={() => handleFooterItemClick(item.href)}
                  className={classes.sidebarItemWrap}
                >
                  <StyledListItemButton>
                    <Typography
                      className={classes.sideBarItemText}
                      sx={{
                        color:
                          router.asPath === item.href ? '#4D9EFE' : 'black',
                      }}
                    >
                      {item.displayName}
                    </Typography>
                  </StyledListItemButton>
                </div>
              </StyledListItem>
            ))}
          </List>
        </div>
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
      <Box sx={{ flex: 1 }}>
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
