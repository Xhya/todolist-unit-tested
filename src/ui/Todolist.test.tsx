import React from 'react';
import { render, screen } from '@testing-library/react';
import Todolist from './Todolist';


// const todolistWebservice = new TodolistWebserviceMock();

describe("Todolist Component", () => {
  it.skip("displays initial list", async () => {
    render(<Todolist/>);
    expect(await screen.findByText("Tomate")).toBeInTheDocument();
  });
});
