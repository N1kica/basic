import { Routes } from "@angular/router";

export const layoutRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("../home/home.component").then((m) => m.HomeComponent)
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];