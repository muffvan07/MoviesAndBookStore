import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./_guards/auth.guard";
import { LoginComponent } from "./_components/login/login.component";
import { RegisterComponent } from "./_components/register/register.component";
import { CustomersComponent } from "./_components/customers/customers.component";
import { CatalogComponent } from "./_components/catalog/catalog.component";
import { CartComponent } from "./_components/cart/cart.component";
import { WishlistComponent } from "./_components/wishlist/wishlist.component";
import { CatalogDetailsComponent } from "./_components/catalog/catalog-details/catalog-details.component";
import { MovieListComponent } from "./_components/catalog/movie-list/movie-list.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "customers", component: CustomersComponent },
  {
    path: "",
    redirectTo: "/catalog",
    pathMatch: "full",
    canActivate: [AuthGuard],
  },
  {
    path: "catalog",
    component: CatalogComponent,
    canActivate: [AuthGuard],
  },
  { path: "movies/:id", redirectTo: "/catalog/:id" },
  { path: "catalog/:id", component: CatalogDetailsComponent },
  {
    path: "customers",
    component: CustomersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "wishlist",
    component: WishlistComponent,
    canActivate: [AuthGuard],
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
