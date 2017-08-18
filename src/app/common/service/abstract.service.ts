import { Injectable, Injector } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import {CommonConstant} from "../constant/common.constant";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CookieConstant } from '../constant/cookie.constant';
import {environment} from "../../../environments/environment";


/*
 * AbstractService
 */
@Injectable()
export class AbstractService {

  // HTTP Module
  protected http: Http;

  // API URL Prefix
  protected API_URL: string =   CommonConstant.API_CONSTANT.API_URL;

  // Base Url Path
  protected BASE_URL: string = environment.api;

  // OAUTH URL URL Prefix
  protected OAUTH_URL: string =  CommonConstant.API_CONSTANT.OAUTH_URL;

  // API TIMEOUT 시간
  private TIMEOUT: number = CommonConstant.API_CONSTANT.TIMEOUT;

  // Cookie 서비스
  protected cookieService: CookieService;

  protected router: Router;


  // 생성자
  constructor(protected injector: Injector) {
    this.http = injector.get(Http);
    // this.cookieService = injector.get(CookieService);
    this.router = injector.get(Router);
  }

  // // Get 방식
  // protected get(url: string): Promise<any> {
  //
  //   // this
  //   const scope: any = this;
  //
  //   // 헤더
  //   const headers = new Headers({
  //     'Content-Type'	: 'application/json',
  //     Authorization	: this.cookieService.get(CookieConstant.KEY.LOGIN_TOKEN_TYPE)
  //     + ' ' + this.cookieService.get(CookieConstant.KEY.LOGIN_TOKEN),
  //
  //   });
  //
  //   // 호출
  //   return this.http.get(url, { headers })
  //     .toPromise()
  //     .then(response => scope.resultHandler(scope, response))
  //     .catch(error => scope.errorHandler(scope, error, httpMethod.GET));
  //
  // }
  // Get 호출
  protected get(url: string): Promise<any> {

    // this
    let scope: any = this;

    // 호출
    return this.http.get(url)
      .toPromise()
      .then( response => { return scope.resultHandler(scope, response); })
      // .catch( error => { return scope.errorHandler(scope, error); });
  }

  // OAuth Token 미포 Get 방식
  protected  getWithoutToken(url: string): Promise<any> {

    // this
    const scope: any = this;

    // 호출
    return this.http.get(url)
      .toPromise()
      .then(response => scope.resultHandler(scope, response))
      .catch(error => scope.errorHandler(scope, error));


  }

  // Post 방식
  protected post(url: string, data: any): Promise<any> {

    // this
    const scope: any = this;

    // 헤더
    const headers = new Headers({
      'Content-Type'	: 'application/json',
      Authorization	: this.cookieService.get(CookieConstant.KEY.LOGIN_TOKEN_TYPE)
      + ' ' + this.cookieService.get(CookieConstant.KEY.LOGIN_TOKEN),

    });

    // 호출
    return this.http.post(url, JSON.stringify(data), { headers })
      .toPromise()
      .then(response => scope.resultHandler(scope, response))
      .catch(error => scope.errorHandler(scope, error, httpMethod.POST,  data));

  }

  // Patch 방식
  protected patch(url: string, data: any): Promise<any> {

    // this
    const scope: any = this;

    // 헤더
    const headers = new Headers({
      'Content-Type'	: 'application/json',
      Authorization	: this.cookieService.get(CookieConstant.KEY.LOGIN_TOKEN_TYPE)
      + ' ' + this.cookieService.get(CookieConstant.KEY.LOGIN_TOKEN),

    });

    // 호출
    return this.http.patch(url, JSON.stringify(data), { headers })
      .toPromise()
      .then(response => scope.resultHandler(scope, response))
      .catch(error => scope.errorHandler(scope, error, httpMethod.POST,  data));

  }

  // OAuth Token 미포 Post 방식
  protected  postWithoutToken(url: string, data: any): Promise<any> {

    // this
    const scope: any = this;

    // 헤더
    const headers = new Headers({ 'Content-Type': 'application/json' });

    // 호출
    return this.http.post(url, JSON.stringify(data), { headers })
      .toPromise()
      .then(response => scope.resultHandler(scope, response))
      .catch(error => scope.errorHandler(scope, error));
  }

  // Put 방식
  protected put(url: string, data: any, contentType?: string): Promise<any> {

    // this
    const scope: any = this;

    let type = 'application/json';
    if (contentType) {
      type = contentType;
    }
    // 헤더
    const headers = new Headers({
      'Content-Type'	: type,
      Authorization	: this.cookieService.get(CookieConstant.KEY.LOGIN_TOKEN_TYPE)
      + ' ' + this.cookieService.get(CookieConstant.KEY.LOGIN_TOKEN),

    });

    const params = type === 'application/json' ? JSON.stringify(data) : data;

    // 호출
    return this.http.put(url, params, { headers })
      .toPromise()
      .then(response => scope.resultHandler(scope, response))
      .catch(error => scope.errorHandler(scope, error, httpMethod.PUT, data));

  }

  // OAuth Token 미포 Put 방식
  protected  putWithoutToken(url: string, data: any): Promise<any> {

    // this
    const scope: any = this;

    // 헤더
    const headers = new Headers({ 'Content-Type': 'application/json' });

    // 호출
    return this.http.put(url, JSON.stringify(data), { headers })
      .toPromise()
      .then(response => scope.resultHandler(scope, response))
      .catch(error => scope.errorHandler(scope, error));


  }

  // delete
  protected delete(url: string): Promise<any> {

    // this
    const scope: any = this;

    // 헤더
    const headers = new Headers({
      'Content-Type'	: 'application/json',
      Authorization	: this.cookieService.get(CookieConstant.KEY.LOGIN_TOKEN_TYPE)
      + ' ' + this.cookieService.get(CookieConstant.KEY.LOGIN_TOKEN),

    });

    // 호출
    return this.http.delete(url, { headers })
      .toPromise()
      .then(response => scope.resultHandler(scope, response))
      .catch(error => scope.errorHandler(scope, error, httpMethod.DELETE));

  }

  // OAuth Token 미포 Get 방식
  protected deleteWithoutToken(url: string): Promise<any> {

    // this
    const scope: any = this;

    // 호출
    return this.http.delete(url)
      .toPromise()
      .then(response => scope.resultHandler(scope, response))
      .catch(error => scope.errorHandler(scope, error));


  }

  // 결과 핸들러
  protected resultHandler(scope: any, response: Response): Promise<any> {
    // TODO 결과에 따라서 오류 검증
    if (response.status >= 200 && response.status < 300) {
      // response data가 없을 경우
      if (response['_body'] === '') {
        return Promise.resolve('');
      } else {
        return response.json();
      }

    }

    // 에러 발생
    throw new Error(response.json().message);
  }


  // // error 핸들러
  // protected errorHandler(scope: any, error: any, method: httpMethod, data: any): Promise<any> {
  //
  //   let errorMessage: any;
  //   if (error.status !== 404) {
  //     errorMessage = error ? error.json() : 'Server error';
  //   } else {
  //     errorMessage = 'Server error';
  //   }
  //
  //   const service = this;
  //   // Token 만료시 로직
  //   if (error.status === 401) {
  //
  //     // 토큰이 만료된 경우 Refresh Token이 있으면 다시 인증
  //     const refreshToken = this.cookieService.get(CookieConstant.KEY.REFRESH_LOGIN_TOKEN);
  //     const userId = this.cookieService.get(CookieConstant.KEY.LOGIN_USER_ID);
  //     if (refreshToken != null && userId != null && method != null) {
  //       return this.refleshToken().then((token) => {
  //
  //         // 쿠키 저장
  //         service.cookieService.put(CookieConstant.KEY.LOGIN_TOKEN, token.access_token);
  //         service.cookieService.put(CookieConstant.KEY.LOGIN_TOKEN_TYPE, token.token_type);
  //         service.cookieService.put(CookieConstant.KEY.REFRESH_LOGIN_TOKEN, token.refresh_token);
  //
  //
  //         // 기존 API를 다시 호출
  //         // const resolve = Promise.resolve;
  //         if (method === httpMethod.GET) {
  //           return this.get(error.url)
  //             .then(response => scope.reRequestResultHandle(scope, response))
  //             .catch(error => scope.reRequestErrorHandle(scope, error));
  //         } else if (method === httpMethod.POST) {
  //           return this.post(error.url, data)
  //             .then(response => scope.reRequestResultHandle(scope, response))
  //             .catch(error => scope.reRequestErrorHandle(scope, error));
  //         } else if (method === httpMethod.PUT) {
  //           return this.put(error.url, data)
  //             .then(response => scope.reRequestResultHandle(scope, response))
  //             .catch(error => scope.reRequestErrorHandle(scope, error));
  //         } else if (method === httpMethod.DELETE) {
  //           return this.delete(error.url)
  //             .then(response => scope.reRequestResultHandle(scope, response))
  //             .catch(error => scope.reRequestErrorHandle(scope, error));
  //         }
  //
  //       }).catch((error) => {
  //         // 토큰 갱신시 에러가 발생하면
  //         service.router.navigate(['/user/login']);
  //       });
  //
  //       // return Promise.resolve()
  //     } else {
  //       // Refresh Token이 없으면 로그인 화면으로
  //       service.router.navigate(['/user/login']);
  //     }
  //   } else {
  //     return Promise.reject(errorMessage);
  //   }
  // }

  // 재요청 에러 헨들러
  protected reRequestErrorHandle(scope: any, error: any) {

    // 재요청을 했는데도 권한 오류가 발생하면 로그인 화면으로
    if (error.status === 401) {
      // 로그인 화면으로
      this.router.navigate(['/user/login']);
      return false;
    }

    const errorMessage = error ? error.json() : 'Server error';
    return Promise.reject(errorMessage);
  }

  // 재요청 결과 헨들러
  protected reRequestResultHandle(scope: any, response: Response) {
    return response;
  }

  // Token 갱신 실패
  protected tokenRefreshFail(scope: any, error: any): void {
    // 로그인 화면으로
    this.router.navigate(['/user/login']);


  }

  // 유저 권한 조회
  public getPermissions(domain: string) : Promise<any> {
    return this.get(this.API_URL + 'auth/' + domain + '/permissions');
  }

  // 유저 권한 체크
  public getPermissionCheck(domain: string, permission: string) : Promise<any> {
    return this.get(this.API_URL + 'auth/' + domain + '/permissions/check?permissions=' + permission);
  }

}

enum httpMethod {
  GET, POST, PUT, DELETE,
}
