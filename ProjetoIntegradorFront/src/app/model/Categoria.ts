import { Produto } from "./Produto"

export class Categoria{

    public id: number
    public tipo: string
    public descricao: string
    public produto: Produto[]
}