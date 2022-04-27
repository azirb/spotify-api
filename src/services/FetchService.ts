import { Axios } from 'axios';
import ROUTES from '../enums/urlEnum';

/**
 *  Service for API calls
 *  @class
 */
export class FetchService {
	/**
	 * Axios private param that will be configured in constructor
	 * Need to do api calls
	 * @private
	 * @param {Axios} axios
	 */
	private axios: Axios;
	/**
	 * Token for authorization
	 * @private
	 * @param {string} authToken
	 */
	private authToken: string;

	/**
	 * Create instance of FetchService for any API calls
	 * @param {string} authToken - need to authorize to spotify
	 */
	constructor(authToken: string) {
		this.authToken = authToken;
		/**
		 *  @param {string} baseURL - base url for api calls
		 */
		this.axios = new Axios({
			baseURL: ROUTES.baseURL,
			headers: {
				'Authorization': 'Bearer ' + this.authToken
			}
		});
	}

	getTrack = (id: string): Promise<unknown> => {
		return this.axios.get(ROUTES.tracks + '/' + id);
	};
}