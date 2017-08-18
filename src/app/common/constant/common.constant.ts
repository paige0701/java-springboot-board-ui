/*
 * API CONSTANT
 */

class APIConstant {

  // URL
  public URL: string = window.location.protocol + '//' + window.location.host;

  // API URL PREFIX
  public API_URL = '/api/';

  // API FULL URL PREFIX
  public API_FULL_URL: string = URL + '/api/';

  // API URL PREFIX
  public OAUTH_URL = '/oauth/';

  // API FULL URL PREFIX
  public OAUTH_FULL_URL: string = URL + '/oauth/';

  // API TIMEOUT 시간
  public TIMEOUT = 5000;

  // Page Size
  public PAGE_SIZE = 20;

  // Page Sort
  public PAGE_SORT_MODIFIED_TIME_DESC = 'modifiedTime,desc';

}

export class RoleConstant {
  public WORKSPACE_VIEW = 'WORKSPACE_VIEW';
  public WORKSPACE_ADMIN = 'WORKSPACE_ADMIN';

}

/*
 * COMMON CONSTANT SUMMARY
 */

export class CommonConstant {

  // API CONSTANT
  public static API_CONSTANT: APIConstant = new APIConstant();

  // ROLE CONSTANT
  public static ROLE: RoleConstant = new RoleConstant();

}
