"use client"; /**Todo componente que tem use client ele é dinamico, ele vai renderizar a pagina novamente a cada requisicao */

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react"; /**so usa do lado do cliente */

type Marca = {
  id: number;
  nome: string;
};
export default function Page() {
  let [contador, setContador] = useState(0);
  let [marcas, setMarcas] = useState([]);

  async function listarMarcas() {
    let response = await fetch("http://localhost:3002/marcas");
    let listaMarcas = await response.json();
    setMarcas(listaMarcas);
  }
  useEffect(() => {
    listarMarcas();
  }, []);

  function incrementar() {
    setContador(contador + 1);
  }
  return (
    <div className="p-4">
      <h1>Página Inicial</h1>
      <p className="text-4xl mb-2">Contador: {contador}</p>
      <Button onClick={incrementar}>+</Button>
      <div className="m-4">
        <h2>Marcas</h2>
        <ul>
          {marcas.map((marca: Marca) => (
            <li key={marca.id}>{marca.nome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
