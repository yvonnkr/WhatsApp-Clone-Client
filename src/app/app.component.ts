import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {FaIconComponent, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fontAwesomeIcons} from './shared/font-awesome-icons';

@Component({
  selector: 'wac-root',
  standalone: true,
  imports: [RouterOutlet, NgbAccordionModule, FaIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private faIconLibrary = inject(FaIconLibrary)

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons)
  }

}
