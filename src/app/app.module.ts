import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgOtpInputModule } from "ng-otp-input";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./_components/header/header.component";
import { LoginComponent } from "./_components/login/login.component";
import { AlertComponent } from "./_components/alert/alert.component";
import { AlertService } from "./_services/alert.service";
import { AuthenticationService } from "./_services/auth.service";
import { UserService } from "./_services/user.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RegisterComponent } from "./_components/register/register.component";
import { JwtInterceptor } from "./_helpers/jwt.interceptors";
import { ErrorInterceptor } from "./_helpers/error.interceptor";
import { fakeBackendProvider } from "./_helpers/fake-backend";
import { CatalogComponent } from "./_components/catalog/catalog.component";
import { CustomersComponent } from "./_components/customers/customers.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MoviesService } from "./_services/movies.service";
import { MovieListComponent } from "./_components/catalog/movie-list/movie-list.component";
import { BookListComponent } from "./_components/catalog/book-list/book-list.component";
import { MovieSingleComponent } from "./_components/catalog/movie-list/movie-single/movie-single.component";
import { BookSingleComponent } from "./_components/catalog/book-list/book-single/book-single.component";
import { BooksService } from "./_services/books.service";
import {
  FontAwesomeModule,
  FaIconLibrary,
} from "@fortawesome/angular-fontawesome";
import {
  faShoppingCart as fasShoppingCart,
  faUsers as fasUsers,
  faFilm,
  faBook,
  faShoppingBag,
  faStar,
  faArrowCircleLeft,
  faBookOpen,
  faInfoCircle,
  faInfo,
  faTrash,
  faCaretRight,
  faArrowLeft,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { CartComponent } from "./_components/cart/cart.component";
import { CartService } from "./_services/cart.service";
import { WishlistComponent } from "./_components/wishlist/wishlist.component";
import { CatalogDetailsComponent } from "./_components/catalog/catalog-details/catalog-details.component";
import { SafeUrlPipe } from "./_guards/safe-url.pipe";
import { WishlistService } from "./_services/wishlist.service";
import { CheckoutComponent } from "./_components/checkout/checkout.component";
import { CustomerService } from "./_services/customer.service";
import { OtpVerificationComponent } from "./_components/otp-verification/otp-verification.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    CatalogComponent,
    CustomersComponent,
    MovieListComponent,
    BookListComponent,
    MovieSingleComponent,
    BookSingleComponent,
    CartComponent,
    WishlistComponent,
    CatalogDetailsComponent,
    SafeUrlPipe,
    CheckoutComponent,
    OtpVerificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    NgOtpInputModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatToolbarModule,
    MatTooltipModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: "toast-bottom-right",
      preventDuplicates: false,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AlertService,
    AuthenticationService,
    UserService,
    MoviesService,
    BooksService,
    CartService,
    WishlistService,
    CustomerService,
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      fasShoppingCart,
      fasUsers,
      faFilm,
      faBook,
      faShoppingBag,
      faStar,
      faArrowCircleLeft,
      faBookOpen,
      faInfoCircle,
      faInfo,
      faTrash,
      faCaretRight,
      faArrowLeft,
      faMinus,
      faPlus
    );
  }
}
