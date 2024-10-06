import { inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map, Observable } from 'rxjs';

export const authGuard = () => {
  const authService = inject(AuthenticationService);
  const isLoggedIn: Observable<boolean | undefined> = toObservable(
    authService.isLoggedIn
  );

  const router = inject(Router);
  return isLoggedIn.pipe(
    filter((x) => x !== undefined),
    map((x) => {
      if (x === true) {
        return true;
      }
      // return to login page
      return router.parseUrl('');
    })
  );
};
