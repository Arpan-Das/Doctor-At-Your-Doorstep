import React, { useState } from "react";
import "./Dashboard.css";
import {
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import DashDocCard from "../../utils/DashDocCard/DashDocCard";

export default function Dashbord() {
  
  const [search, setSearch] = useState({ name: "", option: "" });
  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const doctor = [
    {
      docName: "Sourab",
      docExpert: "Lorem, ipsum dolor.",
      experience: 0,
      rating: 0.5,
    },
    {
      docName: "Arpan",
      docExpert: "Lorem, ipsum dolor.",
      experience: 4,
      rating: 3,
    },
    {
      docName: "Soumen",
      docExpert: "Lorem, ipsum dolor.",
      experience: 4,
      rating: 3,
    },
    {
      docName: "Amina",
      docExpert: "Lorem, ipsum dolor.",
      experience: 4,
      rating: 3,
    },
    {
      docName: "Susovan",
      docExpert: "Lorem, ipsum dolor.",
      experience: 4,
      rating: 3,
    },
    {
      docName: "Sudipta",
      docExpert: "Lorem, ipsum dolor.",
      experience: 4,
      rating: 3,
    },
  ];

  return (
    <div>
      <div className="poster">
        <img
          className="dashboard_image"
          src="https://www.denofgeek.com/wp-content/uploads/2016/10/doctor-strange-1.jpg?fit=1600%2C800"
          alt=""
          srcset=""
        />
      </div>

      <InputGroup
        className="container text-center mb-3 "
        style={{ width: "82%" }}
      >
        <FormControl aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          title="Filter"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>

      <div className="center dashboard__container ">
        <div className="row justify-content-center">

        {doctor.map((item) => (
          <DashDocCard
            docName={item.docName}
            docExpert={item.docExpert}
            experience={item.experience}
            rating={item.rating}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
