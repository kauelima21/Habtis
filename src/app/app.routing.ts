import { Route, provideRouter } from "@angular/router";
import { HomeComponent } from "./pages/Home/home.component";

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent,
  },
];
export const appRouting = [provideRouter(routes)];
