import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';


/*
import { RiskTabComponent } from './components/tab/risk-tab/risk-tab.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ProtectionTabComponent } from './components/tab/protection-tab/protection-tab.component';
import { EvaluationTabComponent } from './components/tab/evaluation-tab/evaluation-tab.component';
import { ConformityTabComponent } from './components/tab/conformity-tab/conformity-tab.component';
import { SolutionsTabComponent } from './components/tab/solutions-tab/solutions-tab.component';
import { NumberQuestionComponent } from './components/question/number-question/number-question.component';
import { YesNoQuestionComponent } from './components/question/yes-no-question/yes-no-question.component';
import { OptionsQuestionsComponent } from './components/question/options-questions/options-questions.component';
import { InputQuestionComponent } from './components/question/input-question/input-question.component';
import { CameraTabComponent } from './components/tab/camera-tab/camera-tab.component';
import { ScanComponent } from './components/scan/scan.component';
import { ScanTabComponent } from './components/tab/scan-tab/scan-tab.component';
import { ManualDetectorComponent } from './components/manual/manual-detector.component';
import { MatSelectModule } from '@angular/material/select';
import { ManualTabComponent } from './components/tab/manual-check-tab/manual-check-tab.component';
*/
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { SingleScanComponent } from './single-scan/single-scan.component';
import { ScanComponent } from './scan/scan.component';
import { HttpClientModule } from '@angular/common/http';
import { ScanTabComponent } from './scan-tab/scan-tab.component';




@NgModule({
  declarations: [
    AppComponent,
    /*
    RiskTabComponent, NumberQuestionComponent, MainMenuComponent,
    ProtectionTabComponent,
    EvaluationTabComponent,
    ConformityTabComponent,
    SolutionsTabComponent,
    YesNoQuestionComponent,
    OptionsQuestionsComponent,
    InputQuestionComponent,
    CameraTabComponent,
    ScanComponent,
    ScanTabComponent,
    ManualDetectorComponent,
    ManualTabComponent,
    */
    SingleScanComponent,
    ScanComponent,
    ScanTabComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
