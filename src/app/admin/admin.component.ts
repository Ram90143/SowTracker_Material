import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  selectedTab: string;
  accounts: any[]; // Replace 'any' with your account object type

  constructor() {
    this.selectedTab = 'Account'; // Set the default selected tab
    this.accounts = [
      { name: 'John Doe', email: 'john.doe@example.com' },
      { name: 'Jane Smith', email: 'jane.smith@example.com' },
      // Add more account objects as needed
    ];
  }

  onTabChange(event: any) {
    this.selectedTab = event.tab.textLabel;
  }

}
