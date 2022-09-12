import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";

const NavStyle = styled.nav`
text-decoration : none;
color : ${colors.primary}
`
function nav() {
  return (
        <>
        <NavStyle>
            <nav>
                <ul>
                    <Link to="/create">
                        <li>Créer un post</li>
                    </Link>
                    <Link to="/login">
                        <li>Se déconnecter</li>
                    </Link>
                </ul>
            </nav>
            </NavStyle>
        </>
  )
}

export default nav