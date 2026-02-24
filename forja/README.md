#📅 Habit Tracker Calendar

A modern habit tracking application with calendar-based visualization, built with React, TypeScript and Vite.
Designed to help users analyze behavioral patterns over time.

✨ Overview

Habit Tracker Calendar is a web application that allows users to log daily habits and visualize them in a monthly calendar view.

The main goal is to provide a clear and intuitive way to:

Track positive habits (e.g. training)

Monitor consumption behaviors

Identify patterns over time

Build self-awareness through data visualization

This project starts as an MVP for portfolio purposes and is architected to evolve into a full-featured behavioral tracking system.

🧱 Tech Stack

⚛️ React

🟦 TypeScript

⚡ Vite

🧭 React Router

💾 localStorage (for MVP persistence)

🎨 Modular and scalable architecture

🚀 Core Features (MVP)
📆 Monthly Calendar View

Grid-based layout (Sun–Sat)

Current month visualization

Clear day separation

🎯 Habit Tracking Per Day

Each day can contain multiple habits.

Supported habits:

Habit	Color	Meaning
Training	🔵 Blue	Physical activity
Alcohol	🔴 Red	Alcohol consumption
Cannabis	🟢 Green	Cannabis usage
Other Drugs	🟣 Purple	Other substances
Cigarette	⚫ Dark Gray	Tobacco usage
💾 Persistent Data

Data stored locally using localStorage

Survives page refresh

Works offline

No backend required for MVP

🧠 Data Modeling

The application uses a scalable and extensible data structure.

Habit Type
export type HabitType =
  | "treino"
  | "alcool"
  | "cannabis"
  | "outrasDrogas"
  | "cigarro";
Day Record
export type DayRecord = {
  date: string;        // ISO date string
  habits: HabitType[]; // Multiple habits per day
};

This structure avoids rigid boolean flags and allows future expansion without structural changes.

🗂 Project Structure
src/
 ├─ components/
 │   ├─ Calendar/
 │   ├─ CalendarDay.tsx
 │   └─ HabitLegend.tsx
 ├─ pages/
 │   ├─ Home.tsx
 │   └─ CalendarPage.tsx
 ├─ services/
 │   └─ storage.ts
 ├─ types/
 │   └─ habit.ts
 ├─ App.tsx
 └─ main.tsx

Architecture follows separation of concerns:

UI components isolated

Storage logic abstracted

Types centralized

Routing separated from layout

💾 Storage Layer Abstraction

Even though the MVP uses localStorage, storage logic is abstracted into a service layer:

export const saveData = (data: DayRecord[]) => {
  localStorage.setItem("calendar", JSON.stringify(data));
};

export const getData = (): DayRecord[] => {
  const stored = localStorage.getItem("calendar");
  return stored ? JSON.parse(stored) : [];
};

This makes migration to a backend seamless in future versions.

🧭 Navigation

Powered by React Router.

Planned routes:

/ → Home

/calendar → Main tracking interface

📈 Future Improvements
Phase 2

Monthly statistics

Habit streak tracking

Data filtering

Responsive improvements

Dark mode

UI animations

Phase 3 (Full Application)

Authentication system

Cloud database integration

Cross-device sync

Advanced analytics dashboard

Correlation engine (training vs consumption patterns)

🎯 Architectural Philosophy

This project emphasizes:

Clean architecture

Scalability

Strong typing

Clear separation of responsibilities

Future-proof design decisions

It is not just a calendar, but a foundation for behavioral analytics.

📦 Installation
npm install
npm run dev
🛠 Development Setup

Node.js version required:

>= 20.19.0
📌 Status

🚧 MVP in active development
🧠 Designed for scalability
📁 Portfolio-ready architecture