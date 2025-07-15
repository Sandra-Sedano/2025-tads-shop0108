'use client';
import { DeleteButton } from "@/components/delete-button";
import { Button } from "@/components/ui/button";
import { Marca } from "@/models/marca";
import { ColumnDef } from "@tanstack/react-table"
import { Edit } from "lucide-react";
import Link from "next/link";


export const columns: ColumnDef<Marca>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "nome",
        header: "NOME",
    },
    {
        id: "actions",
        header: "AÇÕES",
        cell: ({ row }) => {
            const Marca = row.original //pegar o id da marcas
            return(
                <>
                 <Button size="icon" asChild>
                   <Link href={`/cadastro/marcas/editar/${Marca.id}`}><Edit/></Link> 
                  </Button>
                  <DeleteButton id={Marca.marca.id} />
                </>
            )
        }
    }

]