import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



const SideBarCalendar = () => {
    const mark:Array<{date: string, eventList:Array<{id: string, color: string}>}> = [
        {
          date: '2022-06-27',
          eventList:[
            {
              id: '1',
              color: '#7EC6FF'
            },
            {
              id: '2',
              color: '#FFDB7E'
            },
            {
              id: '3',
              color: '#ff6b00'
            }
          ]
        },
        {
          date: '2022-06-02',
          eventList:[
            {
              id: '5',
              color: '#42ff00'
            },
            {
              id: '6',
              color: '#0066ff'
            },
          ]
        },
        {
          date: '2022-06-21',
          eventList:[
            {
              id: '7',
              color: '#7EC6FF'
            },
          ]
        },
        {
          date: '2022-07-01',
          eventList:[
            {
              id: '8',
              color: '#ff6b00'
            },
            {
              id: '9',
              color: '#42ff00'
            },
            {
              id: '10',
              color: '#0066ff'
            }
          ]
        },
        {
          date: '2022-07-30',
          eventList:[
            {
              id: '4',
              color: '#ff6b00'
            },
            {
              id: '11',
              color: '#42ff00'
            },
            {
              id: '12',
              color: '#0066ff'
            },
            {
              id: '13',
              color: '#42ff00'
            }
          ]
        }
    
      ]
      
    
      const [date, setDate] = useState(new Date());
      const [currentDate, setcurrentDate] = useState(new Date())

      


    return (
      <Calendar 
      
      onChange={setDate}
      value={date}
      
      nextLabel={<ArrowForwardIosIcon style={{fontSize: '20px', marginRight: '-10px'}} />}
      prevLabel={<ArrowBackIosIcon style={{fontSize: '20px', marginRight: '-15px'}} />}

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

      
      tileContent={({ date: date, activeStartDate }) => {
        
        const x = mark.find(x=>x.date===moment(date).format('YYYY-MM-DD'))
        
        
        if(typeof x !== 'undefined'){
          const checkDateInCurrentMonth = +x.date.split('-')[1]
          if(moment(activeStartDate).month()+1 === checkDateInCurrentMonth){
            
            if(x.eventList.length === 1) 
            return (
              <div className='dots position-abs --center-in-1' style={{backgroundColor: x.eventList[0].color}}></div>
            )
            else if(x.eventList.length === 2)
            return(
              <>
                <div className='dots position-abs --left-in-2' style={{backgroundColor: x.eventList[0].color}}></div>
                <div className='dots position-abs --right-in-2' style={{backgroundColor: x.eventList[1].color}}></div>
              </>
            )
            else return(
              <>
                <div className='dots position-abs --left-in-3' style={{backgroundColor: x.eventList[0].color}}></div>
                <div className='dots position-abs --center-in-3' style={{backgroundColor: x.eventList[1].color}}></div>
                <div className="dots position-abs --right-in-3" style={{backgroundColor: x.eventList[2].color}}></div>
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
