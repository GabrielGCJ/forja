import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
  min-height: 100vh;
  background: #0f172a;
  color: white;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const HabitSelector = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
`;

export const HabitButton = styled.button<{ active: boolean; color: string }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;

  background: ${({ active, color }) => (active ? color : "#1e293b")};
  color: white;
  white-space: nowrap;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

export const Day = styled.div`
  background: #1e293b;
  border-radius: 12px;
  padding: 0.5rem;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #334155;
  }
`;

export const DayNumber = styled.span`
  font-size: 0.8rem;
  opacity: 0.7;
`;

export const Indicators = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export const Dot = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;