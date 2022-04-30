import React from "react";
import DropDown from "../components/DropDown";
import ListBox from "../components/ListBox";
import TextBox from "../components/TextBox";

const ages = ["< 20 years old", "< 50 years old", "< 70 years old"];

const persons = [
  {
  name: "Nguyen Van A",
  age: "20",
  phone: "0123456789",
  },
  {
    name: "Nguyen Van B",
    age: "80",
    phone: "0123456789",
  },
  {
    name: "Nguyen Van C",
    age: "50",
    phone: "0123456789",
  }
];

const homepage = {
  marginTop: "6%",
  marginLeft: "28%",
  width: 700,
  height: 500,
  backgroundColor: "#E3F6F5",
  borderRadius: "15px",
  padding: "10px 0px 0px 0px",
  boxShadow: "10px 10px 5px 12px #E3F6F5"
};

function HomePage() {
  return (
    <div style={homepage}>
      <h1>Mock Project 1 - TrungLT25</h1>
      <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
        <div
          style={{
            width: 530,
            height: 40,
            margin: "auto",
            justifyContent: "space-between",
            flexDirection: "row",
            display: "flex",
          }}>
          <TextBox/>
          <DropDown array={ages}/>
        </div>

        <div
          style={{
            width: 530,
            height: 40,
            margin: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
            display: "flex",
          }}>
        <ListBox persons = {persons}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
