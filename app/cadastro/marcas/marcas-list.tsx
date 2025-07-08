import { DeleteButton } from "@/components/delete-button";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Marca } from "@/models/marca";
import { Edit, Trash } from "lucide-react";
import { toast } from "sonner";


export async function MarcasList() {

  const response = await fetch(`${process.env.API_URL}/marca`, {
    cache: 'no-store'
  })
  const marcas: Marca[] = await response.json();

  function handleDelete(id: number) {
    throw new Error("Function not implemented.");
  }

  return (
    <section className="mt-8 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marcas.map((marca) => (
            <TableRow key={marca.id}>
              <TableCell className="font-medium">{marca.id}</TableCell>
              <TableCell>{marca.nome}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="icon">
                    <Edit />
                  </Button>
                  <DeleteButton id={marca.id} onClick={() => toast("Marca excluida com sucesso.", {
                    action: {
                      label: "OK",
                      onClick: () => { }
                    }
                  })} />

                </div>
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </section>
  );
}
