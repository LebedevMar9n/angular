import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urls } from './../constants/urls';
import { IUser } from './../interfaces/user.interface';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<IUser[]> {
        return this.httpClient.get<IUser[]>(urls.users)
    }

}