import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./_guards/auth.guard";
import { LoginComponent } from "./_components/login/login.component";
import { RegisterComponent } from "./_components/register/register.component";
import { CustomersComponent } from "./_components/customers/customers.component";
import { CatalogComponent } from "./_components/catalog/catalog.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/catalog",
    pathMatch: "full",
    canActivate: [AuthGuard],
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "customers", component: CustomersComponent },
  {
    path: "catalog",
    component: CatalogComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "customers",
    component: CustomersComponent,
    canActivate: [AuthGuard],
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
