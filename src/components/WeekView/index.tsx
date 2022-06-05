import Calendar, { CalendarApi } from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import clsx from 'clsx';
import moment from 'moment';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './style.module.css';

const WeekView = forwardRef((props, ref) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const calendarRef = useRef<Calendar | null>(null);
  const [calendarAPI, setCalendarAPI] = useState<CalendarApi | null>(null);
  const [eventList, setEventList] = useState([
    {
      title: 'D18 ôn thi học kỳ',
      // date: "2022-25-05",
      description: 'Trụ sở CLB',
      start: '2022-05-22T07:00:00Z',
      end: '2022-05-22T11:00:00Z',
      color: '#7EC6FF',
    },
    {
      title: 'D19 ôn thi học kỳ',
      // date: "2022-25-05",
      description: 'Trụ sở CLB',
      start: '2022-05-25T07:00:00Z',
      end: '2022-05-25T11:00:00Z',
      color: '#7EC6FF',
    },
    {
      title: 'D19 ôn thi học kỳ',
      // date: "2022-25-05",
      description: 'Trụ sở CLB',
      start: '2022-05-25T07:25:00Z',
      end: '2022-05-25T11:20:00Z',
      color: '#FFDB7E',
    },
    {
      title: 'D20 ôn thi học kỳ',
      // date: "2022-25-05",
      description: 'Trụ sở CLB',
      start: '2022-05-30T07:25:00Z',
      end: '2022-05-30T11:20:00Z',
      color: '#FFDB7E',
    },
  ]);
  useEffect(() => {
    if (calendarRef.current) setCalendarAPI(calendarRef.current.getApi());
  }, [calendarRef]);

  useImperativeHandle(ref, () => ({
    nextWeek() {
      calendarAPI?.next();
    },
    prevWeek() {
      calendarAPI?.prev();
    },
    today() {
      calendarAPI?.today();
    },
    goToDate(date: any) {
      const utcDate = moment(date, ['DD-MM-YYYY', 'YYYY-MM-DD']).format(
        'YYYY-MM-DD'
      );
      calendarAPI?.gotoDate(utcDate);
      // console.log(utcDate);
    },
    getDate() {
      return calendarAPI?.getDate();
    },
  }));
  const getEventContent = (evt: any) => {
    const description = evt.event.extendedProps.description;
    const title = evt.event.title;
    const time = evt.timeText;
    return (
      <div style={{ padding: '6px' }}>
        <div className={clsx(styles.eventText, styles.eventTitle)}>{title}</div>
        <div className={styles.eventText}>{time}</div>
        <div className={clsx(styles.eventText, styles.eventDescription)}>
          {description}
        </div>
      </div>
    );
  };
  const getLabelContent = (arg: any) => {
    const hourText = arg.text;
    const hourType = hourText.slice(-2).toUpperCase();
    let slotText = hourType;
    if (hourText.length === 4)
      slotText = hourText[0] + hourText[1] + ' ' + slotText;
    else slotText = hourText[0] + ' ' + slotText;
    return <div className={styles.slotText}>{slotText}</div>;
  };
  const getDayHeaderContent = (arg: any) => {
    const date = arg.date;

    return (
      <div>
        {arg.isToday ? (
          <>
            <div className={clsx(styles.day, styles.todayDay)}>
              {days[date.getDay()]}
            </div>
            <div className={clsx(styles.date, styles.todayDate)}>
              <span className={styles.dateText}>{date.getDate()}</span>
            </div>
          </>
        ) : (
          <>
            <div className={clsx(styles.day, styles.otherDay)}>
              {days[date.getDay()]}
            </div>
            <div className={clsx(styles.date, styles.otherDate)}>
              <span className={styles.dateText}>{date.getDate()}</span>
            </div>
          </>
        )}
      </div>
    );
  };
  return (
    <div>
      <Calendar
        ref={calendarRef}
        height='100vh'
        plugins={[timeGridPlugin, interactionPlugin]}
        headerToolbar={false}
        initialView='timeGridWeek'
        slotDuration='01:00:00'
        nowIndicator={true}
        timeZone='Asia/Ho_Chi_Minh'
        firstDay={1}
        events={eventList}
        eventContent={(evt) => getEventContent(evt)}
        eventTimeFormat={{
          hour: 'numeric',
          minute: 'numeric',
          meridiem: 'short',
        }}
        allDaySlot={false}
        slotLabelContent={(arg) => getLabelContent(arg)}
        dayHeaderContent={(arg) => getDayHeaderContent(arg)}
      />
    </div>
  );
});

export default WeekView;
