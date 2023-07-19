import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [],
  template: `
      <h2>Home</h2>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
