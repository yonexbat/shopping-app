import { Injectable, signal, WritableSignal } from '@angular/core';
import {
  Auth,
  authState,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  UserCredential,
} from '@angular/fire/auth';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth) {
    const state = authState(this.auth);
    state.subscribe((user: User | null) => {
      this.user.set(user ?? undefined);
    });
  }

  public user: WritableSignal<User | undefined> = signal<User | undefined>(
    undefined
  );

  public async login() {
    console.log('login');
    const redirectResult: UserCredential | null = await getRedirectResult(
      this.auth
    );
    // only login if there is no current login.
    if (redirectResult === null) {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(this.auth, provider);
    } else {
      this.user.set(redirectResult.user);
    }
  }

  public async logoff() {
    await signOut(this.auth);
  }
}
