import { useEffect, useState } from "react";
import { Container, Day, DayNumber, Dot, Grid, HabitButton, HabitSelector, Indicators, Title } from "./styles";

type HabitType =
  | "treino"
  | "alcool"
  | "cannabis"
  | "outrasDrogas"
  | "cigarro";

type DayRecord = {
  date: string;
  habits: HabitType[];
};

const habitColors: Record<HabitType, string> = {
  treino: "#2563eb",
  alcool: "#dc2626",
  cigarro: "#4b5563",
  cannabis: "#16a34a",
  outrasDrogas: "#7c3aed",
};

export const Calendar = () => {
  const [records, setRecords] = useState<DayRecord[]>([]);
  const [selectedHabit, setSelectedHabit] = useState<HabitType>("treino");

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  useEffect(() => {
    const stored = localStorage.getItem("habit-records");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setRecords(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("habit-records", JSON.stringify(records));
  }, [records]);

  const toggleHabit = (day: number) => {
    const date = `${year}-${month + 1}-${day}`;

    const existing = records.find(r => r.date === date);

    if (existing) {
      const hasHabit = existing.habits.includes(selectedHabit);

      const updatedHabits = hasHabit
        ? existing.habits.filter(h => h !== selectedHabit)
        : [...existing.habits, selectedHabit];

      const updatedRecords = records.map(r =>
        r.date === date ? { ...r, habits: updatedHabits } : r
      );

      setRecords(updatedRecords);
    } else {
      setRecords([
        ...records,
        { date, habits: [selectedHabit] }
      ]);
    }
  };

  const getHabitsForDay = (day: number) => {
    const date = `${year}-${month + 1}-${day}`;
    return records.find(r => r.date === date)?.habits || [];
  };

  return (
    <Container>
      <Title>Calendário</Title>

      <HabitSelector>
        {Object.keys(habitColors).map(habit => (
          <HabitButton
            key={habit}
            active={selectedHabit === habit}
            color={habitColors[habit as HabitType]}
            onClick={() => setSelectedHabit(habit as HabitType)}
          >
            {habit}
          </HabitButton>
        ))}
      </HabitSelector>

      <Grid>
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const habits = getHabitsForDay(day);

          return (
            <Day
              key={day}
              onClick={() => toggleHabit(day)}
            >
              <DayNumber>{day}</DayNumber>

              <Indicators>
                {habits.map(habit => (
                  <Dot
                    key={habit}
                    color={habitColors[habit]}
                  />
                ))}
              </Indicators>
            </Day>
          );
        })}
      </Grid>
    </Container>
  );
};