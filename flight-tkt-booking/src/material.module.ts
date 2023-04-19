import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatSelectModule} from "@angular/material/select"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatIconModule} from "@angular/material/icon"
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
    exports: [
        MatInputModule,
        MatCardModule,
        MatRadioModule,
        MatButtonModule,
        MatTableModule,MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        MatIconModule,
        MatDividerModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }