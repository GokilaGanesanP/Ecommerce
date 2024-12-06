import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from './api-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers :[ApiServiceService],
})
export class AppComponent {
  title = 'ecommerce_site';  
 

  constructor(private Apiservice : ApiServiceService , private router: Router) {}
  categoryList: any;

  ngOnInit(): void {
    this.Apiservice.getCategories().subscribe(response => {
      this.categoryList = response;
    }, error => {        
      console.log("eror");
    });     
  }

  getProducts(event:any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var categoryname = idAttr.nodeValue;
    
    const encodedCategoryName = encodeURIComponent(categoryname);
    this.router.navigate(['/category/'+encodedCategoryName]);

  }


  isSubMenuOpen = false; 

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen; 
  }

}
