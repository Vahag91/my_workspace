import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export  interface Card {
    id: string;
    content: string;
  }
  
  interface CardSlice {
    id: string;
    title: string;
    cards: Card[];
  }