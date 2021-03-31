import { Component } from '@angular/core';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  account = this.accountService.accountValue;

  constructor(private accountService: AccountService) { }
}
