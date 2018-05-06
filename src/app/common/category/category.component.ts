import { Component, OnInit, Output } from '@angular/core';
import { CategoryService } from './category.service';
import { EventEmitter } from 'events';
@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    @Output() categoryChange = new EventEmitter();
    listCategories;
    constructor(private categoryService: CategoryService) { }

    ngOnInit() {
        this.categoryService.getAllCategory(data => {
            this.listCategories = data;
            console.log(this.listCategories);
        }, error => {
            console.log(error);
        })    
    }

    filterCategory(idcategory) {
        this.categoryChange.emit(idcategory);
    }
}
