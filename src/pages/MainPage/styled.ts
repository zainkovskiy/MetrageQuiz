import styled from 'styled-components';

interface Kanban {
  $columns: number;
}

export const MainPage = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
`;
export const Kanban = styled.div<Kanban>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  flex-grow: 1;
`;
export const StageColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
`;
export const Stage = styled.div`
  font-size: 14px;
  display: block;
  background: #ccc;
  padding: 0.5rem;
  position: relative;
  border-radius: 3px;
  &:after {
    content: '';
    position: absolute;
    display: block;
    left: calc(-0.5rem + 1.5px);
    top: 0px;
    bottom: 0px;
    width: 0.5rem;
    height: 100%;
    background: #ccc;
    clip-path: polygon(100% 0px, 100% 100%, 0px 50%);
    border-radius: 0.25rem;
  }
`;
