import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';
import {FormsModule} from '@angular/forms';
import {MissionComponent} from './mission/mission.component'
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import {MatButtonModule, MatCheckboxModule, MatCardModule , MatSlideToggleModule} from '@angular/material';
import {Routes, RouterModule} from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { VisionComponent } from './vision/vision.component';
const appRoutes: Routes=[
  { path : 'mission', component: MissionComponent },
  { path : '', component: ImageComponent },
  { path : 'vision', component: VisionComponent },
  { path : 'about', component: TimelineComponent },
  { path : 'contact', component: ContactComponent }
 
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageComponent,
    FooterComponent,
    MissionComponent,
    TimelineComponent,
    VisionComponent,
    ContactComponent
   
  ],
  imports: [
    NgbModule.forRoot(),
    MatCardModule,
    MatSlideToggleModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDi1Yr-1ZCueH3-v4KE0YFiV9x40ktqC_w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
