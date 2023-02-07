import React from "react";
import styled from "styled-components";
import GroupIcon from "@mui/icons-material/Group";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

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
  &:hover {
    background: #f33823;
    opacity: 0.8;
    cursor: pointer;
  }
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

function SideBarItem(props) {
  return (
    <Link to={props.url} style={{ textDecoration: "none" }}>
      <Box>
        {props.icon}
        <Text>{props.message}</Text>
      </Box>
    </Link>
  );
}

export default SideBarItem;
