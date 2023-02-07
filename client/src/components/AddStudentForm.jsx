import React from "react";
import DateNow from "./DateNow";
import styled from "styled-components";
import Tables from "./Tables";
import DropDown1 from "./DropDown1";
import DropDown2 from "./DropDown2";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin: 0.5rem 0.8rem; */
`;

const Text = styled.h1`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  color: #000000;
  margin: 1rem;
`;

const StudentForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr fr;
  gap: 1rem;
  margin: 1rem;
  /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2); */
`;

const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: none;
  padding: 1.5rem 2rem;
`;

const Button = styled.button`
  background: #f33823;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: none;
  padding: 1.3rem 2rem;
  /* margin: 1rem; */

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
`;

function AddStudentForm() {
  return (
    <div>
      <Flex>
        <Text>Add Student</Text>
        <DateNow />
      </Flex>
      <StudentForm>
        <Input placeholder="First Name" />
        <Input placeholder="Middle Name" />
        <Input placeholder="Last Name" />

        <DropDown1 />
        <DropDown2 />
        <Input placeholder="Enter Roll Number in Digits" />
      </StudentForm>

      <StudentForm style={{ gridTemplateColumns: "1fr 1fr" }}>
        <Input placeholder="Address Line 1" />
        <Input placeholder="Address Line 2" />
      </StudentForm>

      <StudentForm>
        <Input placeholder="City" />
        <Input placeholder="State" />
        <Input placeholder="Pincode" />

        <Button>Add Student</Button>
      </StudentForm>
    </div>
  );
}

export default AddStudentForm;
