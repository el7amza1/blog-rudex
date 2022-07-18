import React from "react";
import { Button } from "react-bootstrap";
import PostForm from "./PostForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { NameContext } from "../TheConText";
import { ReactComponent as Moon } from "../imgs/moon.svg";
import { ReactComponent as Sun } from "../imgs/sun.svg";
import { ReactComponent as Reddit } from "../imgs/reddit.svg";
import Image from 'react-bootstrap/Image'
import proimg from "../imgs/pexels-italo-melo-2379004.jpg"
function Navbar({ setSearsh }) {
    const { switchTheme, currentTheme } = useContext(NameContext);
    const search = (e) => {
        setSearsh(e.target.value);
    };
    const [show, setShow] = useState(false);
    const showForm = () => {
        setShow(!show);
    };
    // console.log(serch);

    return (
        <div className="navbar1 p-st ">
            <div className="py-2" variant="light">
                <div className="d-flex  justify-content-between">
                    <div className="d-flex">
                        <Link className="link" to={"/"}>
                            {" "}
                            <Reddit className="logo" />
                        </Link>
                    </div>
                    <div className="w-st">
                        <div className="active-pink-3 active-pink-4 ">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={search}
                            />
                        </div>
                    </div>
                    <div className="d-flex">
                    <Image src={proimg} roundedCircle width="50" height="50" className="mx-3"/>
                        <Button variant="danger" className="btn-color " onClick={showForm}>
                            New Post
                        </Button>
                        <div
                            className={
                                currentTheme === "light" ? "btn-dark mode" : "btn-primary mode"
                            }
                            onClick={switchTheme}
                        >
                            {currentTheme === "light" ? <Moon /> : <Sun />}
                        </div>
                    </div>
                </div>
            </div>
            {show && <PostForm showForm={showForm} />}
        </div>
    );
}

export default Navbar;
