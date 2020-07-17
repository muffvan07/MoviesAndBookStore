import { Component, OnInit } from "@angular/core";
import { User } from "../../_models/user";
import { Subscription } from "rxjs";
import { AuthenticationService } from "../../_services/auth.service";
import { UserService } from "../../_services/user.service";
import { first } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"],
})
export class CustomersComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private spinner: NgxSpinnerService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.loadAllUsers();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
      });
  }
}
