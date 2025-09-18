import { Routes } from '@angular/router';
import { User } from './user/user';
import { Student } from './student/student';
import { Edit } from './edit/edit';
import { Delete } from './delete/delete';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: 'user', component: User },
  { path: 'student', component: Student },
  { path: 'edit', component: Edit },
  { path: 'delete/:id', component: Delete },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard,canActivate:[authGuard] },
];
