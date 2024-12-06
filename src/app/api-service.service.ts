import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'https://fakestoreapi.com/products/'; 



  getCategories(){
    return this.http.get(this.apiUrl+"categories");
  }

  getProductsbyCategory(category:any)
  {
    return this.http.get(this.apiUrl+"category/"+category);
  }

  getProductsbyId(Id:any)
  {   
    return this.http.get(this.apiUrl+Id);
  }



}
