import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonSearchbar } from '@ionic/angular/standalone';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  standalone: true,
  imports: [IonSearchbar, ReactiveFormsModule],
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() searchQueryControl!: FormControl;
  @Output() clearSearch = new EventEmitter();

  onClear(): void {
    this.clearSearch.emit();
  }
}
