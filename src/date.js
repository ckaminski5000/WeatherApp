import { toDate, fromUnixTime } from 'date-fns'


//convert date to day
export function convertDay(time){
    let date = fromUnixTime(time);
    date = date.getDay();
    if(date === 1){
      return 'Monday';
    }
    else if(date === 2){
      return 'Tuesday';
    }
    else if(date === 3){
      return 'Wednesday';
    }
    else if(date === 4){
      return 'Thursday';
    }
    else if(date === 5){
      return 'Friday';
    }
    else if(date === 6){
      return 'Saturday';
    }
    else if(date === 0){
      return 'Sunday';
    }
  }
  

//function that converts numbers to months
export function toMonth(string){
    if(string === 0){
        return 'January';
    }
    else if(string === 1){
        return 'February';
    }
    else if(string === 2){
        return 'March';
    }
    else if(string === 3){
        return 'April';
    }
    else if(string === 4){
        return 'May';
    }
    else if(string === 5){
        return 'June';
    }
    else if(string === 6){
        return 'July';
    }
    else if(string === 7){
        return 'August';
    }
    else if(string === 8){
        return 'September';
    }
    else if(string === 9){
        return 'October';
    }
    else if(string === 10){
        return 'November';
    }
    else if(string === 11){
        return 'December';
    }
}