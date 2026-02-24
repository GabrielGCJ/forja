import { useState } from "react";
import {
  Button,
  Card,
  CarouselWrapper,
  Container,
  Controls,
  Slide,
  SlidesContainer,
} from "./styles";

export const Home = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Bem-vindo a Forja",
      text: "Um projeto para visualizar sua evolução diária de forma simples e visual.",
    },
    {
      title: "Visualização Inteligente",
      text: "Treinos, álcool, cigarro e outras drogas organizados em um calendário interativo.",
    },
    {
      title: "Autoconhecimento",
      text: "Enxergue padrões. Entenda seus ciclos. Evolua com consciência.",
    },
    {
      title: "Pequenas decisões, grandes resultados",
      text: "Não é sobre mudar tudo de uma vez. É sobre escolher melhor hoje.",
    },
    {
      title: "Consistência vence motivação",
      text: "Motivação oscila. Consistência constrói resultados reais.",
    },
    {
      title: "Você é seus hábitos",
      text: "O que você faz repetidamente molda quem você se torna.",
    },
    {
      title: "Visualize para evoluir",
      text: "O que é medido pode ser transformado.",
    },
    {
      title: "Disciplina é liberdade",
      text: "Quanto mais controle você tem sobre seus hábitos, mais livre você se torna.",
    },
    {
      title: "Um dia por vez",
      text: "Não pense no ano inteiro. Pense apenas no próximo dia.",
    },
    {
      title: "Consciência antes da mudança",
      text: "Entender seus padrões é o primeiro passo para quebrá-los.",
    },
    {
      title: "Equilíbrio é força",
      text: "Não se trata de perfeição, mas de progresso constante.",
    },
    {
      title: "Você pode recomeçar",
      text: "Falhou hoje? Amanhã é outra oportunidade de fazer diferente.",
    },
    {
      title: "Seu futuro agradece",
      text: "As decisões de hoje constroem a vida que você quer viver.",
    },
  ];

  const nextSlide = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <Container>
      <CarouselWrapper>
        <SlidesContainer style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <Slide key={i}>
              <Card>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </Card>
            </Slide>
          ))}
        </SlidesContainer>
      </CarouselWrapper>

      <Controls>
        <Button onClick={prevSlide} disabled={index === 0}>
          Voltar
        </Button>
        <Button onClick={nextSlide} disabled={index === slides.length - 1}>
          Próximo
        </Button>
      </Controls>
    </Container>
  );
};
