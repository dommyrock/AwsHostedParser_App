import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  //   const dropdownRef = useRef(null);
  //ref={dropdownRef} is broken , watch video to fix
  //   useEffect(() => {
  //     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  //   }, []);

  //removed --ref={dropdownRef}
  function calcHeight(el) {
    const height = el.offsetHeight;
    debugger;
    setMenuHeight(height);
  }
  //pass in slots so left and right item can render if they exist

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={
              <svg
                viewBox="0 0 16 16"
                className="bi bi-arrow-down-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
                />
              </svg>
            }
            rightIcon={
              <svg
                viewBox="0 0 16 16"
                className="bi bi-arrow-down-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
                />
              </svg>
            }
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={
              <svg
                viewBox="0 0 16 16"
                className="bi bi-arrow-down-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
                />
              </svg>
            }
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={
              <svg
                viewBox="0 0 16 16"
                className="bi bi-arrow-down-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
                />
              </svg>
            }
          >
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={
              <svg
                viewBox="0 0 16 16"
                className="bi bi-arrow-up-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
                />
              </svg>
            }
          >
            HTML
          </DropdownItem>
          <DropdownItem
            leftIcon={
              <svg
                viewBox="0 0 16 16"
                className="bi bi-arrow-up-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
                />
              </svg>
            }
          >
            CSS
          </DropdownItem>
          <DropdownItem
            leftIcon={
              <svg
                viewBox="0 0 16 16"
                className="bi bi-arrow-up-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
                />
              </svg>
            }
          >
            JavaScript
          </DropdownItem>
          <DropdownItem
            leftIcon={
              <svg
                viewBox="0 0 16 16"
                className="bi bi-arrow-up-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
                />
              </svg>
            }
          >
            Awesome!
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={
              <svg
                viewBox="0 0 16 16"
                className="bi bi-arrow-up-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
                />
              </svg>
            }
          >
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
