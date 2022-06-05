import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  sideBar: {
    // width: 250,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginBottom: 16,
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
  sideBarCenterContent: {
    marginBottom: 120,
  },
  sidebarList: {
    marginBottom: 6,
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
    padding: '16px 0',

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
  sidebarFooter: {
    position: 'relative',
  },
  footerWrap: {
    position: 'absolute',
    maxWidth: '100%',
    transition: '0.4s',
    top: '100%',
    backgroundColor: '#fff',
  },
});

export default useStyles;
