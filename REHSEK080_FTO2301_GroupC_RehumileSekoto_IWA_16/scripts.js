// data
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  //functions
  // Only edit below this comment
  /**
   * This function will take athlete ID as argument 
   * and generate HTML containing information about the athlete(athlete's full name, no. of races, most recent race date and most recent race duration  )
   * @param {string} athlete 
   */
  const createHtml = (athlete) => {
   
    const {firstName, surname, id, races} = data.response.data[athlete]
    const {date} = races[races.length-1]

    const fragment = document.createDocumentFragment();
  
    let athleteTitle = document.createElement('h2');
    athleteTitle.innerText = id;
    fragment.appendChild(athleteTitle); 
  
    const section = document.querySelector(`[data-athlete=${athlete}]`)
    const list = document.createElement('dl');
  const newDate = new Date(date); 

    const day = newDate.getDate()
     const month = MONTHS[newDate.getMonth()]
    const year = newDate.getFullYear();
  
  const [first, second, third, fourth] = races[races.length-1].time 
   const totalTime = first + second + third + fourth;
  
  const hours = Math.floor(totalTime / 60);
  const minutes = totalTime % 60;

  
    list.innerHTML = `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}</dd> 
    `;
  
    fragment.appendChild(list);
        section.append(fragment)
  }
   
  
  const {NM372, SV782} = data.response.data

  createHtml('NM372');
  createHtml('SV782');
  

 
  
  



