import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  Auth,
  authState,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  UserCredential,
} from '@angular/fire/auth';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth) {
    this.init();
  }

  public userState: WritableSignal<User | undefined | 'unauthenticated'> =
    signal<User | undefined | 'unauthenticated'>(undefined);

  public isLoggedIn: Signal<boolean | undefined> = computed(() => {
    const state = this.userState();   
    if (state === 'unauthenticated') {
      return false;
    } else if (state?.displayName) {
      return true;
    }
    return undefined;
  });

  public user: Signal<User | undefined> = computed(() => {
    if (this.userState() === 'unauthenticated') {
      return undefined;
    }
    if (this.userState()) {
      return this.userState() as User;
    }
    return undefined;
  });

  public async login() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(this.auth, provider);
  }

  private async init() {          
    authState(this.auth).subscribe((user: User | null) => {
      this.userState.set(user ?? 'unauthenticated');
    });
  }

  public async logoff() {
    await signOut(this.auth);
  }
}
