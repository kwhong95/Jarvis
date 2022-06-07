import { useState } from "react";
import styled from "@emotion/styled";
import { FaUserCircle } from "react-icons/fa";

import { SpeechBubble } from "components";
import { Member } from "interfaces";

const Container = styled.figure`
  display: flex;
  position: relative;
  height: 30px;

  .photo-icon {
    position: absolute;

    img {
      border-radius: 50%;
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .bubbly {
    position: absolute;
    top: -3rem;
  }

  .total-member-num {
    position: absolute;
    color: white;
    left: 3.3rem;
    top: 0.3rem;
  }
`;

interface Props {
  members: Array<Member>;
}

const MembersIcon: React.FC<Props> = ({ members }) => {
  const [showBallon, setShowBallon] = useState<boolean>(false);

  const onEnter = () => setShowBallon(true);

  const onLeave = () => setShowBallon(false);

  const BubbleLabel = members.map((member) => member.name).join();

  return (
    <Container onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {showBallon && (
        <div className="bubbly">
          <SpeechBubble label={BubbleLabel} />
        </div>
      )}
      {members.map((member, idx) => (
        <>
          {idx < 3 && (
            <div
              className="photo-icon"
              key={idx}
              style={{
                left: `${idx * 20}px`,
                height: "30px",
                width: "30px",
                filter: idx === 2 ? "blur(2px)" : "none",
              }}
            >
              {member.photo === null ? (
                <FaUserCircle />
              ) : (
                <img
                  width={30}
                  height={30}
                  src={member.photo?.url}
                  alt={member.name}
                />
              )}
            </div>
          )}
        </>
      ))}
      {members.length > 2 && (
        <p className="total-member-num">{`+${members.length - 2}`}</p>
      )}
    </Container>
  );
};

export default MembersIcon;
