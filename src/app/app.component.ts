import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practichna28';
  countries: string[] = ['Україна', 'Польща', 'Франція', 'Іспанія'];
  newCountry: string = '';
  removeIndex: number = -1;

  addCountry() {
    if (this.newCountry.trim() !== '') {
      this.countries.push(this.newCountry.trim());
      this.countries.sort();
      this.newCountry = '';
    }
  }

  removeCountry() {
    if (this.removeIndex !== null && this.removeIndex >= 0 && this.removeIndex < this.countries.length) {
      this.countries.splice(this.removeIndex, 1);
      this.removeIndex = -1;
    }
  } 
  removeCountry1(name: string) {
    const index = this.countries.indexOf(name);
    if (index !== -1) {
      this.countries.splice(index, 1);
    }
  }

  showOnlyWithP = false;
  checkboxIndexes = '';
  checkboxes: boolean[] = [];


  onCheckboxIndexesChange() {
    const indexes = this.checkboxIndexes.split(',');
    this.checkboxes = new Array(this.countries.length).fill(false);
    for (const indexStr of indexes) {
      const index = parseInt(indexStr.trim());
      if (!isNaN(index) && index >= 0 && index < this.checkboxes.length) {
        this.checkboxes[index] = true;
      }
    }
  }
  users = ['Микола', 'Василь', 'Петро'];
  otherUsers = ['Іван', 'Дмитро', 'Андрій'];

  moveUser() {
    if (this.otherUsers.length > 0) {
      const user = this.otherUsers.shift();
      if (user) {
        this.users.push(user);
      }
    }
  }
  numbers: number[] = [1, 2, 3, 4, 5];
  total: number = this.numbers.reduce((acc, curr) => acc + curr, 0);
  newNumber: number = 0;

  addNumber(): void {
    if (this.newNumber) {
      this.numbers.push(this.newNumber);
      this.total = this.numbers.reduce((acc, curr) => acc + curr, 0);
      this.newNumber = 0;
    }
  }
}
