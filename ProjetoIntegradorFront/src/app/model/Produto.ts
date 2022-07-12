import { Categoria } from "./Categoria"

export class Produto{

    public id: number
    public nome: string
    public valor: number
    public descricao: string
    public peso: number
    public foto: string
    public categoria: Categoria
}