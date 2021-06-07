import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnDestroy, PLATFORM_ID, Inject, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ScanComponent } from '../scan/scan.component';
import { DetectorsService } from 'src/app/detectors.service';
import { Detector } from 'src/app/classes/detector';

@Component({
  selector: 'app-scan-tab',
  templateUrl: './scan-tab.component.html',
  styleUrls: ['./scan-tab.component.css'],
})
export class ScanTabComponent implements AfterViewInit, AfterViewChecked {
  addingDetector = false;
  detectors: any = [];
  selectedDetector: Detector;
  constructor( private router: Router,
  private dialog: MatDialog, public detectorsService:DetectorsService) {}
  picture:boolean =false;


  nbDetectors: number[]=[];
  index:number=0;
  ngAfterViewInit(): void {
    this.openDialog();
    this.nbDetectors.push(1);
    this.nbDetectors.push(1);
    this.nbDetectors.push(1);
    this.nbDetectors.push(1);
    this.getDetectors();

  }

  ngAfterViewChecked(){}

  cancel() {
    this.addingDetector = false;
    this.selectedDetector = null;
  }

  deleteDetector(detector: Detector) {
    this.detectorsService.deleteHero(detector).subscribe(res => {
      this.detectors = this.detectors.filter(h => h !== detector);
      if (this.selectedDetector === detector) {
        this.selectedDetector = null;
      }
    });
  }

  getDetectors() {
    return this.detectorsService.getHeroes().subscribe(detectors => {
      this.detectors = detectors;
    });
  }

  enableAddMode() {
    this.addingDetector = true;
    //this.selectedDetector = new Detector();
  }

  onSelect(detector: Detector) {
    this.addingDetector = false;
    this.selectedDetector = detector;
  }

  save() {
    if (this.addingDetector) {
      this.detectorsService.addHero(this.selectedDetector).subscribe(detector => {
        this.addingDetector = false;
        this.selectedDetector = null;
        this.detectors.push(detector);
      });
    } else {
      this.detectorsService.updateHero(this.selectedDetector).subscribe(detector => {
        this.addingDetector = false;
        this.selectedDetector = null;
      });
    }
  }
  openDialog(): void{
    const dialogRef =this.dialog.open(ScanComponent, {
      height: '90%',
      width: '35%',
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log(this.picture);
      this.picture = this.detectorsService.picture;
      console.log(this.picture);
    });

  }
}
