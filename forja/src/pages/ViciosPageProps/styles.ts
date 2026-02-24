import styled, { keyframes } from "styled-components";

// Animação fade-in
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Container da página
export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffedd5, #fff7ed, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-family: 'Inter', sans-serif;
`;

// Card central
export const Card = styled.div`
  background: #ffffff;
  border-radius: 2rem;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  flex: 1;
  border: 2px solid #fed7aa;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #fb923c;
    box-shadow: 0 0 0 4px rgba(251, 146, 60, 0.2);
  }
`;

export const AddButton = styled.button`
  background-color: #f97316;
  color: white;
  font-weight: 700;
  border-radius: 1rem;
  padding: 0 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ea580c;
  }
`;

export const List = styled.ul`
  margin-bottom: 1.5rem;
  max-height: 10rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff7ed;
  border: 1px solid #ffe5d4;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ListItemName = styled.span`
  color: #c2410c;
  font-weight: 500;
`;

export const RemoveButton = styled.button`
  color: #dc2626;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #991b1b;
  }
`;

export const SubmitButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  font-weight: 700;
  border-radius: 1.5rem;
  background-color: ${(props) => (props.disabled ? "#fed7aa" : "#f97316")};
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s, box-shadow 0.2s;
  box-shadow: ${(props) =>
    props.disabled ? "none" : "0 4px 10px rgba(0, 0, 0, 0.1)"};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#fed7aa" : "#ea580c")};
    box-shadow: ${(props) =>
      props.disabled ? "none" : "0 6px 15px rgba(0, 0, 0, 0.15)"};
  }
`;