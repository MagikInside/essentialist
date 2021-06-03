import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Direction} from '../models/direction.enum';
import {Visibility} from '../models/visibility.enum';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations: [
    trigger('toggle', [
      state(
        Visibility.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        Visibility.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @Input() scroll: Direction | null = Direction.Up;
  @Input() darkColor: boolean | null = false;

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    if (window.pageYOffset === 0) {
      return Visibility.Visible;
    } else {
      return this.scroll === Direction.Up ? Visibility.Visible : Visibility.Hidden;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
