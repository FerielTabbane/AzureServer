import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DetectorsService } from 'src/app/detectors.service';


@Component({
    selector: 'app-scan',
    templateUrl: './scan.component.html',
    styleUrls: ['./scan.component.css'],
})
export class ScanComponent implements AfterViewInit, AfterViewChecked {

    constructor(private dialogRef: MatDialogRef<ScanComponent>, private detectorsService:DetectorsService) {}
    ngAfterViewInit(): void {}

    ngAfterViewChecked(): void {
    }

    close():void{
      this.dialogRef.close();
    }
    manual():void{
      this.detectorsService.picture=false;
      this.close();
    }
    takePicture():void{
      this.detectorsService.picture=true;
      this.close();
    }


}
