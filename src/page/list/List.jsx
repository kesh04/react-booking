/* eslint-disable no-undef */
import React, { useState } from "react";
import { format } from "date-fns";
import "./List.css";
import Navbar from "../../componets/navbar/Navbar";
import Header from "../../componets/header/Header";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "../../componets/searchItem/SearchItem";

export default function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
//   const [destination, setDestination] = useState(location.state?.destination || '');
// const [date, setDate] = useState(location.state?.date || [{ startDate: new Date(), endDate: new Date() }]);
// const [option, setOption] = useState(location.state?.option || { adults: 1, children: 0, room: 1 });

  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(location.state.option);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSerach">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Option</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adults</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={option.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Childern</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={option.childern}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={option.room}
                />
              </div>
            </div>
            <button>Search </button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
