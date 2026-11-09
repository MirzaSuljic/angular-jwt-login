import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-subnav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './subnav.component.html',
  styleUrl: './subnav.component.css',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class SubNavComponent {}
