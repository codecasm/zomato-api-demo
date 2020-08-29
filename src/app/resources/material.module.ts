/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatListModule,
        MatTableModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatListModule,
        MatTableModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatSelectModule
    ],
})

export class MyMaterialModule { }
