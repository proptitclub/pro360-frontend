import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SideBarCalendar = () => {
    const mark:Array<{date: string, dots: number}> = [
        {
          date: '27-06-2022',
          dots: 3
        },
        {
          date: '02-06-2022',
          dots: 2
        },
        {
          date: '06-06-2022',
          dots: 1
        },
        {
          date: '21-06-2022',
          dots: 2
        },
        {
          date: '01-07-2022',
          dots: 1
        }
    
      ]
    
      const [date, setDate] = useState(new Date());
      const [currentDate, setcurrentDate] = useState(new Date())


    return (
      <Calendar 
      
      onChange={setDate}
      value={date}
      
      nextLabel={<ArrowForwardIosIcon style={{fontSize: '20px'}} />}
      prevLabel={<ArrowBackIosIcon style={{fontSize: '20px'}} />}

      onActiveStartDateChange={({activeStartDate}) => setcurrentDate(activeStartDate)}
      
      formatMonthYear ={
        () => {
          return new Intl.DateTimeFormat(
          'en-US', 
          {
            month: 'short', 
            year: 'numeric', 
            
          }).format(currentDate)}
        }

      
      tileContent={({ date, activeStartDate }) => {
        
        const x = mark.find(x=>x.date===moment(date).format('DD-MM-YYYY'))
        
        
        if(typeof x !== 'undefined'){
          const checkDateInCurrentMonth = +x.date.split('-')[1]
          if(moment(activeStartDate).month()+1 === checkDateInCurrentMonth){
            
            if(x.dots === 1) 
            return (
              <div className='dots1 position-abs --center-in-1'></div>
            )
            else if(x.dots === 2)
            return(
              <>
                <div className='dots1 position-abs --left-in-2'></div>
                <div className='dots2 position-abs --right-in-2'></div>
              </>
            )
            else return(
              <>
                <div className='dots1 position-abs --left-in-3'></div>
                <div className='dots2 position-abs --center-in-3'></div>
                <div className="dots3 position-abs --right-in-3"></div>
              </>
            )
          }
        }
        
          
        return null
        
      }}
      />
    );
}

export default SideBarCalendar;
