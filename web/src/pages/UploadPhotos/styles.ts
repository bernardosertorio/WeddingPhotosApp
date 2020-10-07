import styled from 'styled-components';

export const Header = styled.header`
   margin-top: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
  }

  h1 {
    margin-left: 50px;
    color: var(--primary-color);
  }

  a {
    margin: 50px;
    color: var(--title-color);
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 4px;
`;

export const Form = styled.form`
    margin: 20px auto;
    padding: 64px;
    max-width: 1200px;
    background: #FFF;
    border-radius: 8px;

    display: flex;
    flex-direction: column
  }

  button {
    width: 260px;
    height: 56px;
    background: var(--primary-color);
    border-radius: 8px;
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: center;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
  background: #2FB86E;
}
`;
