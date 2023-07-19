import { Routes } from "@angular/router";

export const layoutRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("../home/home.component").then((m) => m.HomeComponent)
  },
  {
    path: "search",
    loadComponent: () =>
      import("../search/search.component").then((m) => m.SearchComponent)
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];
