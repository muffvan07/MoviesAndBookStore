import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
})
export class CatalogComponent implements OnInit {
  images = [
    "https://www.wallpaperup.com/uploads/wallpapers/2015/12/12/858387/4b8a92b93fc6b6a5a91175fdc7692d3c-700.jpg",
    "https://www.unl.edu/english/images/news/alumnibooks2017.png",
  ];

  constructor() {}

  ngOnInit(): void {}
}
