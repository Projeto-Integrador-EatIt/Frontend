import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://projetoeatit.herokuapp.com/produtos', this.token)
  }

  getByIdProdutos(id: number): Observable<Produto>{
    return this.http.get<Produto>(`https://projetoeatit.herokuapp.com/produtos/${id}`, this.token)

  }

  postProdutos(produto: Produto) : Observable<Produto>{
    return this.http.post<Produto>('https://projetoeatit.herokuapp.com/produtos', produto, this.token)
  }

  deleteProdutos(id: number){
    return this.http.delete(`https://projetoeatit.herokuapp.com/produtos/${id}`, this.token)
  }

  putProdutos(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://projetoeatit.herokuapp.com/produtos', produto, this.token)

  }

}
