import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NavbarComponent } from "./ui/navbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <app-navbar />
    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {}
