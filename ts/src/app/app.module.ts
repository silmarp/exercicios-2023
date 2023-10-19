import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { FooterComponent } from './footer/footer.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { TopicComponent } from './discussion/topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    DiscussionComponent,
    TopicComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
