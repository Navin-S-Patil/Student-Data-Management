import React from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";

const Nav = styled.nav`
  /* background: grey; */
  color: #fff;
  /* text-align: center; */
  padding: 0.3rem;

  /* display: flex; */
`;

const Logo = styled.h1`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: rgba(88, 74, 74, 0.74);

  margin: 0.5rem 2rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  /* gap: 16px; */

  

  background: #fffcfb;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 0.5rem 2rem;
`;

const UserEmail = styled.h3`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #000000;
`;

function Navbar() {
  return (
    <Nav>
      <Flex>
        <Logo>Logo</Logo>

        <SmallFlex>
          <PersonIcon color="action" style={{ padding: "0.3rem" }} />
          <UserEmail>username@resoluteai.in</UserEmail>
        </SmallFlex>
      </Flex>
    </Nav>
  );
}

export default Navbar;
