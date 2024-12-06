import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers : [ApiServiceService]
})
export class CategoryComponent {
  constructor(private Apiservice : ApiServiceService, private route: ActivatedRoute) {}
  productList :  any;
  categoryName : any;
  productInfo : any;
  isVisible = false;  


  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('category');
      const decodedCategoryName = decodeURIComponent(this.categoryName);
          this.Apiservice.getProductsbyCategory(decodedCategoryName).subscribe(response => {
            this.productList = response; 
          }, error => {        
            console.log("eror");
          });   

     
    });
  }


  getProductInfo(event:any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var prodId = idAttr.nodeValue;
    this.isVisible = true;
    this.Apiservice.getProductsbyId(prodId).subscribe(response => {
      this.productInfo = response;     
    }, error => {        
      console.log("eror");
    }); 


  }
 

  closeModal(){
    this.isVisible = false;
  }


  
 

 
}
