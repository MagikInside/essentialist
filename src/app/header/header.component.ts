import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {Direction} from '../models/direction.enum';
import {Visibility} from '../models/visibility.enum';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  items: MenuItem[] = [
    {label: 'The Travel Dispatch'},
    {label: 'My Trips', styleClass: 'active'},
    {label: 'My Profile'},
    {label: 'Messages', icon: 'pi pi-comment'},
  ];

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
      return this.scroll === Direction.Down ? Visibility.Hidden : Visibility.Visible;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
