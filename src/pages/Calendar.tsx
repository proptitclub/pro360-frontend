import Gear from '@/assets/Gear.svg';
import MagnifyingGlass from '@/assets/MagnifyingGlass.svg';
import StyledSelect from '@/components/customMUI/StyledSelect';
import MyButton from '@/components/MyButton';
import WeekView from '@/components/WeekView';
import { EViewType } from '@/types';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import SearchIcon from '@mui/icons-material/Search';
import {
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import moment from 'moment';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  ChangeEventHandler,
  FormEvent,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';

const Calendar: NextPage = () => {
  const [searchEvent, setSearchEvent] = useState('');
  const weekRef = useRef<any | null>(null);
  const classes = useStyles();

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  const [currentViewType, setCurrentViewType] = useState<EViewType>(
    EViewType.WEEK
  );

  const handleNext = () => {
    weekRef.current?.nextWeek();
    setCurrentTime(weekRef.current.getDate());
  };
  const handleBack = () => {
    weekRef.current?.prevWeek();
    setCurrentTime(weekRef.current.getDate());
  };

  const handleDisplayTime = (time: Date) => {
    if (currentViewType === EViewType.WEEK) {
      const startTime = moment(time);
      const endTime = moment(time).isoWeekday(7);
      if (startTime && endTime)
        return `${startTime.format('DD')}${
          startTime.month() !== endTime.month() ||
          startTime.year() !== endTime.year()
            ? ' ' + startTime.format('MMM')
            : ''
        } ${
          startTime.year() !== endTime.year()
            ? '-' + startTime.format('YYYY')
            : ''
        } - ${endTime.format('DD')} ${endTime.format('MMM')} ${endTime.format(
          'YYYY'
        )}`;
    } else if (currentViewType === EViewType.MONTH) {
      return moment(time).format('MMM YYYY');
    }
    return moment(time).format('DD MMM YYYY');
  };

  const handleChangeViewType = (
    event: SelectChangeEvent<EViewType>,
    child: React.ReactNode
  ) => {
    setCurrentViewType(event.target.value as EViewType);
  };

  const handleAddClick = () => {
    window.alert('Clicked');
  };

  const handleSettingClick = () => {
    window.alert('Clicked');
  };

  const handleSearchTermChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log('change: ', event.currentTarget.value);
    setSearchTerm(event.currentTarget.value);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert('Search term: ' + searchTerm);
  };

  useEffect(() => {
    if (weekRef.current) {
      setCurrentTime(moment(weekRef.current.getDate()).isoWeekday(1).toDate());
    }
  }, [weekRef]);

  return (
    <Fragment>
      <Head>
        <title>Calendar | Pro360</title>
      </Head>
      <Container maxWidth='xl'>
        <div className={classes.headerWrap}>
          <div className={classes.headerLeft}>
            <Typography className={classes.dateWrap}>
              {`${handleDisplayTime(currentTime)} `}
            </Typography>
            <div className={classes.changeDateWrap}>
              <IconButton onClick={handleBack}>
                <KeyboardArrowLeftRoundedIcon />
              </IconButton>
              <IconButton onClick={handleNext}>
                <KeyboardArrowRightRoundedIcon />
              </IconButton>
            </div>
          </div>

          <div className={classes.headerRight}>
            <div className={classes.headerRightItem}>
              <IconButton onClick={() => setShowSearch(true)}>
                <img src={MagnifyingGlass.src} alt='' width={36} />
              </IconButton>
            </div>
            <div className={classes.headerRightItem}>
              <IconButton onClick={handleSettingClick}>
                <img src={Gear.src} alt='' width={36} />
              </IconButton>
            </div>
            <div className={clsx(classes.headerRightItem, classes.selectWrap)}>
              <FormControl fullWidth>
                <StyledSelect
                  labelId='select-view-type-label'
                  id='select-view-type'
                  defaultValue={EViewType.WEEK}
                  value={currentViewType}
                  onChange={(
                    event: SelectChangeEvent<unknown>,
                    child: React.ReactNode
                  ) =>
                    handleChangeViewType(
                      event as SelectChangeEvent<EViewType>,
                      child
                    )
                  }
                >
                  {Object.values(EViewType).map((type) => (
                    <MenuItem value={type} key={type}>
                      {type}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </FormControl>
            </div>
            <div className={classes.headerRightItem}>
              <MyButton
                onClick={() => handleAddClick()}
                text='Add'
                prefixIcon={<AddIcon />}
                className={classes.addBtn}
              />
            </div>
          </div>

          {showSearch && (
            <div className={classes.searchWrap}>
              <div className={classes.searchLabelWrap}>
                <IconButton onClick={() => setShowSearch(false)}>
                  <ArrowBackIcon />
                </IconButton>
                <Typography className={classes.searchLabelWrapText}>
                  Tìm kiếm
                </Typography>
              </div>
              <div className={classes.searchInputWrap}>
                <form onSubmit={handleSearch}>
                  <OutlinedInput
                    name='searchTerm'
                    onChange={(
                      event: React.FormEvent<
                        HTMLInputElement | HTMLTextAreaElement
                      >
                    ) =>
                      handleSearchTermChange(
                        event as React.FormEvent<HTMLInputElement>
                      )
                    }
                    fullWidth
                    sx={{ maxWidth: 920 }}
                    placeholder='Tìm kiếm'
                    startAdornment={
                      <InputAdornment position='start'>
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton>
                          <ArrowDropDownIcon fontSize='large' />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </form>
              </div>
            </div>
          )}
        </div>
        <WeekView ref={weekRef}></WeekView>
      </Container>
    </Fragment>
  );
};

export default Calendar;

const useStyles = makeStyles(() => ({
  headerWrap: {
    padding: '14px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '0 18px',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '0 18px',
  },
  dateWrap: {
    fontSize: 30,
    fontWeight: '700',
  },
  changeDateWrap: {
    marginLeft: 16,
  },
  headerRightItem: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  selectWrap: {
    margin: '0 10px',

    minWidth: 110,
  },
  addBtn: {
    padding: '9px 16px',
    width: 'unset',
    height: 'unset',
    color: '#fff',
    backgroundColor: '#4D9EFE',
    '&:hover': {
      backgroundColor: '#4D9EFE',
      // backgroundColor: theme.palette.primary.main,
      borderColor: '#4D9EFE !important',
    },
  },
  searchWrap: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  searchLabelWrap: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    // paddingLeft: 16
  },
  searchLabelWrapText: {
    fontSize: 22,
    marginLeft: 12,
    color: '#505050',
  },
  searchInputWrap: {
    flex: 4,
  },
}));
