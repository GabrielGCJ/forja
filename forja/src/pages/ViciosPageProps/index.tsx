import { useState } from "react";
import { PageContainer,Card,
  Title,
  InputGroup,
  Input,
  AddButton,
  List,
  ListItem,
  ListItemName,
  RemoveButton,
  SubmitButton, } from "./styles";
// import {
//   PageContainer,
//   Card,
//   Title,
//   InputGroup,
//   Input,
//   AddButton,
//   List,
//   ListItem,
//   ListItemName,
//   RemoveButton,
//   SubmitButton,
// } from "./ViciosPage.styles"; // importando os styled-components

interface ViciosPageProps {
  onSubmit: (vicios: string[]) => void;
}

const ViciosPage: React.FC<ViciosPageProps> = ({ onSubmit }) => {
  const [vicio, setVicio] = useState<string>("");
  const [vicios, setVicios] = useState<string[]>([]);

  const addVicio = () => {
    const trimmed = vicio.trim();
    if (trimmed && !vicios.includes(trimmed)) {
      setVicios([...vicios, trimmed]);
      setVicio("");
    }
  };

  const removeVicio = (index: number) => {
    setVicios(vicios.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (vicios.length) {
      onSubmit(vicios);
    }
  };

  return (
    <PageContainer>
      <Card>
        <Title>Quais são os seus vícios?</Title>

        <InputGroup>
          <Input
            type="text"
            value={vicio}
            onChange={(e) => setVicio(e.target.value)}
            placeholder="Digite um vício"
          />
          <AddButton onClick={addVicio}>+</AddButton>
        </InputGroup>

        <List>
          {vicios.map((v, idx) => (
            <ListItem key={idx}>
              <ListItemName>{v}</ListItemName>
              <RemoveButton onClick={() => removeVicio(idx)}>×</RemoveButton>
            </ListItem>
          ))}
        </List>

        <SubmitButton disabled={vicios.length === 0} onClick={handleSubmit}>
          Continuar
        </SubmitButton>
      </Card>
    </PageContainer>
  );
};

export default ViciosPage;