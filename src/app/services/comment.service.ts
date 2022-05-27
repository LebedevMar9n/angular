import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IComment } from '../interfaces';
import { urls } from './../constants/urls';

@Injectable({ providedIn: 'root' })
export class CommentService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<IComment[]> {
        return this.httpClient.get<IComment[]>(urls.comments)
    }

}