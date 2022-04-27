/**
 *  Services for cookies easy work
 *  Need to save, get and renew access token
 *  @class
 */
export class CookieService {
	/**
	 *  Cookie variable
	 *  @private
	 */
	private _cookies: string = document.cookie;

	/**
	 *  Set or update cookie by name
	 *  @param {string} cookieName  - name of cookie
	 *  @param {(string | number)} cookieValue - value  of cookie
	 *  @return {void} - return noting
	 */
	setCookie = (cookieName: string, cookieValue: string | number): void => {
		this._cookies = `${cookieName}=${cookieValue}`;
	};

	/**
	 *  Get cookie by Name
	 *  @param {string} cookieName - name of searched cookie
	 *  @return {(string | null)} - return value of cookie or null if no cookie with name like searched
	 */
	getCookie = (cookieName: string): string | null => {
		if (this._cookies.indexOf(cookieName) === -1) {
			return null;
		}
		const result = this._cookies.slice(this._cookies.indexOf(cookieName) + cookieName.length + 1);
		if (result.indexOf(';') === -1) {
			return result;
		}
		return result.slice(0, result.indexOf(';'));
	};
}
