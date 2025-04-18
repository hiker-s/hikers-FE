import styled from "styled-components";

interface RankerProps {
  $isMe?: boolean;
}

export const RankerContainer = styled.div<RankerProps>`
  display: flex;
  padding: 0.9375rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 1.25rem;
  background: #fff;
  border: 1px solid ${({ $isMe }) => ($isMe ? "#349989" : "#c8c8c8")};
  ${({ $isMe }) => ($isMe ? "box-shadow: 0px 0px 10px 0px #349989;" : "box-shadow: 0px 0px 5px 0px #c8c8c8;")};
  height: 5rem;
  width: 21.2rem;
`;

export const RankerInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const NameStampContainer = styled.div`
  display: flex;
  height: 2.375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1875rem;
  margin-left: -0.4rem;
`;

export const PlaceContainer = styled.div`
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const Place = styled.div<RankerProps>`
  display: inline-flex;
  height: 1.25rem;
  padding: 0rem 0.3125rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 6.25rem;
  border: 1px solid #c8c8c8;
  border-color: ${({ $isMe }) => ($isMe ? "#349989" : "#c8c8c8")};
  color: ${({ $isMe }) => ($isMe ? "#349989" : "#c8c8c8")};
`;

export const Img = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.div`
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Stamp = styled.div<RankerProps>`
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: lowercase;
  color: ${({ $isMe }) => ($isMe ? "#349989" : "#a4a4a4")};
  &::after {
    content: " stamps";
    font-weight: 400;
  }
`;

export const StatusImage = styled.img``;
