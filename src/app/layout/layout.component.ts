import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderComponent } from "./ui/header.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-navbar />
    <main class="py-20 px-8">
      <router-outlet />
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {}
