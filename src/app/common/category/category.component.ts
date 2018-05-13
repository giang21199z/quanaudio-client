import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CategoryService } from './category.service';
@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    @Output() categoryChange: EventEmitter<number> = new EventEmitter<number>();
    listCategories;
    constructor(private categoryService: CategoryService) { }

    ngOnInit() {
        this.categoryService.getAllCategory(data => {
            this.listCategories = data;
        }, error => {
            console.log(error);
        })    
    }

    filterCategory(idcategory) {
        this.categoryChange.emit(idcategory);
    }
}
