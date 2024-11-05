import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Header() {
    return (
        <Nav>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Logo src="/images/logo.png" alt="TFS logo" />
            </Link>
            <NavMenu>
                <a href="/">
                    <img src="/images/home.svg" alt="home icon" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/request.svg" alt="request a movie icon" />
                    <span>REQUEST A MOVIE</span>
                </a>
                <a>
                    <img src="/images/history.svg" alt="history icon" />
                    <span>HISTORY</span>
                </a>
                <a>
                    <img src="/images/profile.svg" alt="profile icon" />
                    <span>MY PROFILE</span>
                </a>
            </NavMenu>
        </Nav>
    );
}

export default Header;

const Nav = styled.nav`
    height: 70px; 
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 900px) {
        padding: 0 20px;
    }
`;

const Logo = styled.img`
    width: 52px;
    cursor: pointer;

    @media (max-width: 900px) {
        width: 60px;
    }
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        position: relative;

        img {
            height: 20px;
            margin-right: 8px; /* Add some spacing between icon and text */
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0.5);
            }
        }

        &:hover {
            span:after { 
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 15px; /* Add some spacing for user image */
`;
