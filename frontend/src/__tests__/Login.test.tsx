import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/login";
import { useAuthStore } from "../store/authStore";

jest.mock("../store/authStore");

describe("Login Page", () => {
  it("deve renderizar campos de login e senha", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText("Usuário")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
  });

  it("deve chamar o método login ao submeter o formulário", () => {
    const mockLogin = jest.fn();
    (useAuthStore as unknown as jest.Mock).mockReturnValue({ login: mockLogin });

    render(<Login />);
    fireEvent.change(screen.getByPlaceholderText("Usuário"), {
      target: { value: "admin" },
    });
    fireEvent.change(screen.getByPlaceholderText("Senha"), {
      target: { value: "1234" },
    });
    fireEvent.click(screen.getByText("Entrar"));
    expect(mockLogin).toHaveBeenCalled();
  });
});
