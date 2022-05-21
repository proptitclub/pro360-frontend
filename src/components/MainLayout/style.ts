import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  sideBar: {
    // width: 250,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  sidebarWrap: {
    width: 300,
    [`& .MuiDrawer-paper`]: {
      width: 300,
      boxSizing: 'border-box',
    },
  },
  logo: {
    width: 100,
    marginTop: 32,
    marginLeft: 24,
    cursor: 'pointer',
  },
  sidebarList: {
    padding: 0,
    paddingLeft: 24,
    listStyle: 'none',
  },
  sidebarItem: {},
  sidebarItemWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  sideBarItemText: {
    marginLeft: 8,
    fontWeight: 500,
    // lineHeight: '10px'
  },

  accountWrap: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    justifyContent: 'space-between',
  },

  infoWrap: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '70%',
    paddingLeft: 6,

    '& *': {
      fontWeight: 500,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  accountName: {
    fontSize: 18,
    lineHeight: '24px',
  },
  accountEmail: {
    fontSize: 13,
    lineHeight: '16px',
  },
});

export default useStyles;
