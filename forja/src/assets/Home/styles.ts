import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #0f172a;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  overflow: hidden;
`;

export const SlidesContainer = styled.div`
  display: flex;
  transition: transform 0.4s ease-in-out;
`;

export const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  background: #1e293b;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    padding: 3rem;
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;

export const Controls = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  border: none;
  background: #2563eb;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;

  &:disabled {
    background: #334155;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #1d4ed8;
  }
`;