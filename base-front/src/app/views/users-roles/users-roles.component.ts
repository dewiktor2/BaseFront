import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users-roles',
  templateUrl: './users-roles.component.html',
  styleUrls: ['./users-roles.component.scss']
})
export class UsersRolesComponent implements OnInit {
  loading = false;
  userSource = [
    {
      id: 1,
      name: 'Administrators',
      description: 'Administration roles',
      totalCount: 2,
      users: [
        {
          id: 1,
          name: 'Wiktor Dębski',
          email: 'a.c@gmail.com',
          lastActivity: 'March 08, 2020'
        },
        {
          id: 2,
          name: 'Adam Małysz',
          email: 'a.m@gmail.com',
          lastActivity: 'March 09, 2020'
        }
      ]
    },
    {
      id: 2,
      name: 'Developers',
      description: 'Create apps',
      totalCount: 6,
      users: [
        {
          id: 3,
          name: 'Sven Hann',
          email: 'm.d@gmail.com',
          lastActivity: 'March 08, 2020'
        },
        {
          id: 4,
          name: 'Mateja',
          email: 'b.m@gmail.com',
          lastActivity: 'March 08, 2020'
        },
        {
          id: 5,
          name: 'Ingebrigsten',
          email: 'c.d@gmail.com',
          lastActivity: 'March 08, 2020'
        },
        {
          id: 6,
          name: 'Risto Jussilainen',
          email: 'j.k@gmail.com',
          lastActivity: 'March 08, 2020'
        },
        {
          id: 7,
          name: 'Janne Ahonen',
          email: 'v.m@gmail.com',
          lastActivity: 'March 08, 2020'
        },
        {
          id: 8,
          name: 'Tommy Innauer',
          email: 'b.a@gmail.com',
          lastActivity: 'March 08, 2020'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  getShortName(fullName) {
    return fullName.split(' ').map(n => n[0]).join('');
  }

}
