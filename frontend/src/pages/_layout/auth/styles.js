import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: #fff;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 1px solid #ddd;
      padding: 15px;
      height: 45px;
      margin: 8px 30px 20px;
      border-radius: 4px;

      &::placeholder {
        color: #ddd;
      }
    }

    strong {
      color: #444;
      font-size: 1.4rem;
      margin-left: 30px;
      align-self: flex-start;
    }

    button {
      margin: 0 30px 50px;
      color: #fff;
      height: 45px;
      font-weight: bold;
      border: 0;
      background: #ee4d64;
      border-radius: 4px;
      font-size: 1.6rem;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }
  }
`;
