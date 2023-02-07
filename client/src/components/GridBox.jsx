import React from "react";
import styled from "styled-components";
import SideBarItem from "./SideBarItem";
import GroupIcon from "@mui/icons-material/Group";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LogoutIcon from "@mui/icons-material/Logout";
import AddStudentForm from "./AddStudentForm";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.3rem;
`;

const Sidebar = styled.div`
  background: #fffcfb;
  /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2); */
  border-radius: 5px;
  margin: 0.5rem 0.8rem;

  grid-column-start: 1;
  grid-column-end: 2;
  /* Setting up the grid */

  display: flex;
  flex-direction: column;

  padding: 4rem 0rem;
`;

const Main = styled.div`
  background: #fffcfb;
  /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2); */
  border-radius: 5px;
  margin: 0.5rem 0.8rem;
  grid-column-start: 2;
  grid-column-end: 5;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.4rem 1rem;
  gap: 0.8rem;

  /* width: 13rem; */
  /* height: 48px; */
  margin: 0.7rem 0.8rem;

  background: #f33823;
  border-radius: 5px;
`;

const Text = styled.h3`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
`;

function GridBox(props) {
  return (
    <Grid>
      <Sidebar>
        <SideBarItem
          icon={<GroupIcon color="action" />}
          message="Add Student"
          url="/addStudent"
        />
        <SideBarItem
          icon={<FormatListBulletedIcon color="action" />}
          message="Manage Students"
          url="/"
        />
        <SideBarItem icon={<LogoutIcon color="action" />} message="Logout" />
      </Sidebar>

      <Main>
        {/* <AddStudentForm /> */}
        {props.compo}
      </Main>
    </Grid>
  );
}

export default GridBox;
