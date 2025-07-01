'use server'

import { stringifyFormData } from "@/lib/helpers"
import { redirect } from "next/navigation"
const API_URL = process.env.API_URL
const headers = {
'Content-Type': 'aplication/json',
}
export async function criarMarca(formData:FormData){
    let response = await fetch(`${API_URL}/marca`,{
       
        headers,
 method:'POST',
body:stringifyFormData(formData)
})

redirect ('/cadastro/marcas/')
}
export async function deletarMarca(id:number){
let response = fetch(`${API_URL}/marca/${id}`, {
 method:'DELETE',
})
redirect ('/cadastro/marcas/')
}