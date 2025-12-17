import { useState } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "../store/authStore";

export default function Login() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(username, password);
      router.push("/");
    } catch {
      alert("Usuário ou senha inválidos!");
    }
  }

  return (
    <div className="max-w-sm mx-auto bg-white p-6 shadow rounded mt-20">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full mb-3 rounded"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
