import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../todo";
import todo from "../todo";


test('should render todo component', () => {
    // expect(true).toBe(true);
    render(<Todo/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
})