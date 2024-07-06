import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student-Mangemeant';
  items: MenuItem[] | undefined;

  ngOnInit() {


    this.items = [
      {
        label: 'Student',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New Student',
            icon: 'pi pi-fw pi-plus',
            routerLink:"Add"

          },
          {
            label: 'View Student',
            icon: 'pi pi-fw pi-eye',
            routerLink:"View"
          },

        ]
      },
      {
        label:"Course",
        icon: 'pi pi-fw pi-file',
        items:[
          {
            label: 'New Course',
            icon: 'pi pi-fw pi-plus ',
            routerLink: "Cr-Add"
          },
          {
            label: 'View Course',
            icon: 'pi pi-fw pi-eye',
            routerLink:"Cr-View"
          }
        ]
      },
      {
        label:"Admission ",
        icon: 'pi pi-fw pi-file',
        items:[
          {
            label: 'New Admission',
            icon: 'pi pi-fw pi-plus ',
            routerLink: "Ad-Add"
          },
          {
            label: 'View Admission',
            icon: 'pi pi-fw pi-eye',
            routerLink: "Ad-View"

          }
        ]
      }



    ];
  }
}
