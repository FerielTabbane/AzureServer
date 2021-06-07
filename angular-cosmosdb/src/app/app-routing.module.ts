import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanTabComponent } from './scan-tab/scan-tab.component';
import { ScanComponent } from './scan/scan.component';
import { SingleScanComponent } from './single-scan/single-scan.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /*
  { path: 'menu', component: MainMenuComponent },
  { path: 'riskTab', component: RiskTabComponent },
  { path: 'protectionTab', component: ProtectionTabComponent },
  { path: 'evaluationTab', component: EvaluationTabComponent },
  { path: 'conformityTab', component: ConformityTabComponent },
  { path: 'solutionsTab', component: SolutionsTabComponent },
  { path: 'cameraTab', component: CameraTabComponent },
  { path: 'scan', component: ScanTabComponent },
  { path: 'manualCheck', component: ManualTabComponent },


/*
  {
    path: 'cameraTab',
    canActivate: [ CanShowCam],
    component: CameraTabComponent,
    data: { title: 'cameraTab' }
   },
*/


  { path: 'home', component: ScanTabComponent },
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
