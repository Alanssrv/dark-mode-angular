import { Component } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public icon: ETheme = ETheme.ICON_MOON;

  public toogle() {
    const theme = document.body.classList.toggle('dark-theme');
    if (theme)
      this.icon = ETheme.ICON_SUN;
    else
      this.icon = ETheme.ICON_MOON;
  }
}
