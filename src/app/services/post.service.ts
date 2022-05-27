import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { urls } from './../constants/urls';
import { IPost } from './../interfaces/post.interface';

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private HttpClient: HttpClient) { }

    getAll(): Observable<IPost[]> {
        return this.HttpClient.get<IPost[]>(urls.posts)
    }
}