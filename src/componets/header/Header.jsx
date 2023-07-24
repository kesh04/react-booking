import React, { useState } from "react";
import "./Header.css";
import { FaBed, FaCar, FaTaxi, FaCalendarAlt } from "react-icons/fa";
import { MdFlight, MdAttractions, MdPerson } from "react-icons/md";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

 
  const [openOption, setopenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    childern: 0,
    room: 1,
  });

  const handleOptaion = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const navigate = useNavigate();
   const handleSearch =()=>{
    navigate("/hotel", { state: { destination, date, option } });
   }
  return (
    <div className=" header ">
      <div   className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerlist">
          <div className="headerlistItem active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="headerlistItem">
            <MdFlight />
            <span>Flight</span>
          </div>
          <div className="headerlistItem">
            <FaCar />
            <span>Car rental</span>
          </div>
          <div className="headerlistItem">
            <MdAttractions />
            <span>Attractions</span>
          </div>
          <div className="headerlistItem">
            <FaTaxi />
            <span>Airport Taxi </span>
          </div>
        </div>
        {  type !== "list" &&
          <>
            <h1 className="headerTitel">The great getaway, your way</h1>
            <p className="headerDesc">
              Save at least 15% on stays worldwide, from relaxing retreats to
              off-grid adventures
            </p>
            <button className="headerBtn">Find Getaway Deals </button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FaBed className="hederIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={e=> setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FaCalendarAlt className="hederIcon" />
                <span
                  onClick={() => setOpenDate(!openDate )}
                  className="headerSearchtext"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <MdPerson className="hederIcon" />
                <span
                  onClick={() => setopenOption(!openOption)}
                  className="headerSearchtext"
                >
                  {" "}
                  {`${option.adult} Adults · ${option.childern} Children · ${option.room} Room`}
                </span>

                {openOption && (
                  <div className="option">
                    <div className="optaionItem">
                      <span className="optiontext">Adults</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOptaion("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOptaion("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optaionItem">
                      <span className="optiontext">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.childern <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOptaion("childern", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.childern}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOptaion("childern", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optaionItem">
                      <span className="optiontext">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOptaion("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOptaion("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
              </div>
            </div>{" "}
          </>
        }
      </div>
    </div>
  );
};

export default Header;
