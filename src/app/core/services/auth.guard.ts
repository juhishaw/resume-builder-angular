import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { AuthenticatorService } from './authenticator.service';

export const authGuard = (next: ActivatedRouteSnapshot) => {
  const _auth = inject(AuthenticatorService);
  if (_auth.isLoggedIn) {
    return true;
  } else return createUrlTreeFromSnapshot(next, ['/', 'login']);
};
