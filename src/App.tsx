import React, {useCallback, useEffect, useState} from "react";
import './App.css'
import Header from "./components/Header/Header.tsx";
import MainContainer from "./components/Main/MainContainer.tsx";
import {Ticket} from './types.ts';

const plainChangeOptions = [
    {
        id: 0,
        title: 'Без пересадок',
        isChecked: false
    },
    {
        id: 1,
        title: '1 пересадка',
        isChecked: false
    },
    {
        id: 2,
        title: '2 пересадки',
        isChecked: false
    },
    {
        id: 3,
        title: '3 пересадки',
        isChecked: false
    }
]

const AIRLINES = [
    {
        id: 0,
        title: 'Lufthansa'
    },
    {
        id: 1,
        title: 'Aeroflot'
    },
    {
        id: 2,
        title: 'American Airlines'
    }
]

const accessKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNjVjNzFhYTIzOTM1ZDVmMTViZTA4ZDliMTA5ODg0NmE4ZDYyOTIzYTYzZGEwMjQ3OTE4OWNiZTAyMzYzOTdmODUxMjU0YjI3YzJhNzI2ZjciLCJpYXQiOjE2OTI5ODg4MjAsIm5iZiI6MTY5Mjk4ODgyMCwiZXhwIjoxNzI0NjExMjIwLCJzdWIiOiIyMTYzMSIsInNjb3BlcyI6W119.SFUo157R3BBAAKuaEBebEb0ooZC_UKd55fTTnKO-s8s88ICAMR74YPAk9lkq5IyHc1jFBNRqDiZ7xowTOaWArQ'

export const Context = React.createContext({
    isChecked: false,
    onClick: () => {},
    changeOptions: plainChangeOptions,
    airlines: AIRLINES
});
function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [flightTicket, setFlightTicket] = useState<Ticket>(null)

  function load() {
    fetch(
      `https://vast-brushlands-99372-128b9198810c.herokuapp.com/https://app.goflightlabs.com/retrieveFlights?access_key=${accessKey}&originSkyId=LOND&destinationSkyId=NYCA&originEntityId=27544008&destinationEntityId=27537542&date=2023-10-29`)
      .then(response => response.json())
      .then(data => {
          data.itineraries.map(flight => {
            setFlightTicket({
              id: flight.id,
              company: `${flight.legs[0].carriers.marketing[0].name}`,
              from: `${flight.legs[0].origin.name}`,
              to: `${flight.legs[0].destination.name}`,
              price: Number(flight.price.raw),
              currency: 'RUB',
              date: flight.legs[0].departure,
              connectionAmount: Number(flight.legs[0].stopCount),
              duration: Number(flight.legs[0].durationInMinutes),
              time: {
                startTime: flight.legs[0].departure,
                endTime: flight.legs[0].arrival
              },
              logo: `${flight.legs[0].carriers.marketing[0].logoUrl}`
            })
          })
        }
      )
      .catch(error => console.log(`${error} - Fetching failed`))
  }

  useEffect(() => {
    load();
  }, [])

  console.log(flightTicket)

    const checkItem = (e: MouseEvent) =>  {
      const target = e.target as HTMLDivElement;

      for (let option of plainChangeOptions) {
              if(!isChecked && Number(target.dataset.id) === option.id) {
                  setIsChecked(true);
                  option.isChecked = isChecked;
              } if (isChecked && Number(target.dataset.id) === option.id) {
                  setIsChecked(false);
                  option.isChecked = isChecked;
              }
          }
    }

  return (
    <>
        <Header />
        <Context.Provider value={{isChecked: isChecked, onClick: checkItem, changeOptions: plainChangeOptions, airlines: AIRLINES}}>
            <MainContainer />
        </Context.Provider>
    </>
  )
}

export default App
