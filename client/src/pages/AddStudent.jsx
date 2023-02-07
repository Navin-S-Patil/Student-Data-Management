import React from "react";
import AddStudentForm from "../components/AddStudentForm";
import GridBox from "../components/GridBox";
import Navbar from "../components/Navbar";

function ManageStudents() {
  return (
    <>
      <Navbar />
      <GridBox compo={<AddStudentForm />} />
    </>
  );
}

export default ManageStudents;
