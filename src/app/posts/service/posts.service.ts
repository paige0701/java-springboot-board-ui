import {Injectable, Injector} from '@angular/core';
import { AbstractService } from '../../common/service/abstract.service';
import {Posts} from "../../domain/post/posts";
import {environment} from "environments/environment.prod";

@Injectable()
export class PostsService extends AbstractService{

  constructor(protected injector:Injector) {
    super(injector);
  }

  public getPosts(): Promise<Posts> {

    let url = environment.api;
    return this.get(url);

  }

  public getDetail(id:string): Promise<Posts> {
    let url = environment.api + `/{id}`;
    return this.get(url);
  }
}
