import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { Dropdown } from "components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
  cursor: pointer;

  .image {
    overflow: hidden;
    border-radius: 50%;
  }

  .username {
    font-weight: 600;
  }

  .icon-wrap {
    font-size: 1.25rem;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 10%;
  right: 20%;
  transform: translate(-50%, -50%);

  .dropdown {
    align-items: flex-start;
    display: flex;
    position: relative;
    transition: height 0.3s;

    .menu {
      display: flex;
      flex-direction: column;
      font-size: 1.25rem;
      width: 100%;
      position: relative;

      .item-list {
        list-style-type: none;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-around;

        .item {
          flex: 1;
          text-align: center;
          cursor: pointer;
          line-height: 6.5rem;
          transition: all 0.2s;

          &:hover {
            background: white;
            color: black;
          }
        }
      }
    }
  }
`;

const UserWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <>
      <Container onClick={handleDropdown}>
        <div className="image">
          <img
            src="/icons/apple-touch-icon-72x72.png"
            alt="User"
            width={30}
            height={30}
          />
        </div>
        <div className="username">
          <p>Kyle Hong</p>
        </div>
        <div className="icon-wrap">
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
      </Container>
      <Wrapper>
        <Dropdown isOpen={isOpen} height={90}>
          <div className="dropdown">
            <div className="menu">
              <ul className="item-list">
                <li onClick={() => navigate("/change")} className="item">
                  Change Password
                </li>
              </ul>
            </div>
          </div>
        </Dropdown>
      </Wrapper>
    </>
  );
};

export default UserWidget;
