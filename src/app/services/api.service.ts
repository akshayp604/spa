import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { NotifierService } from 'angular-notifier';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
const currentTimestaps = new Date().getTime().toString();
let token = localStorage.getItem('token');

	/**
	 * Common header to call and varify all APIs 
	 * for more info contact jayesh sharda sir and akshay patidar sir.
	 * @param 'Authorization': authstr.toString(),
	 * @param 'Authtimestamp':currentTimestaps
	 * @return authenticate the all endpoints
	 */
const headers = {
	headers: new HttpHeaders({
		'Accept': 'application/json',
		'Authorization' : `Bearer `+ token,
	})
};
const headers1 = {
	headers: new HttpHeaders({
		'Accept': 'application/json',
	})
};


@Injectable({
  providedIn: 'root'
})

export class ApiService {
	private readonly notifier: NotifierService;

  constructor(private http: HttpClient,notifierService: NotifierService,private ngxService: NgxUiLoaderService) { 
	this.notifier = notifierService;

  }

  getAuthDetail(){

    let data = localStorage.getItem('adminlogin');
    let user = localStorage.getItem('user');
    let token = localStorage.getItem('token');
    return {data,user, token}
  }

  removeauth(){
   localStorage.removeItem('adminlogin');
   localStorage.removeItem('user');
   localStorage.removeItem('token');
  }

  	/**
	 * Common function to call all APIs
	 * @param endpoint
	 * @param args
	 * @param httpmethod
	 * @return response as obserbalbe
	 */

	fetchData(endpoint:string, args = {}, httpmethod = 'GET'): Observable<any> {
		let token = localStorage.getItem('token');

		/**
		 * Common header to call and varify all APIs 
		 * for more info contact jayesh sharda sir and akshay patidar sir.
		 * @param 'Authorization': authstr.toString(),
		 * @param 'Authtimestamp':currentTimestaps
		 * @return authenticate the all endpoints
		 */
		let headers = {
			headers: new HttpHeaders({
				'Accept': 'application/json',
				'Authorization' : `Bearer `+ token,
			})
		};

		let requestURL = environment.baseUrl + endpoint;

		/**
		 * To covert parameters into query string
		 */
		
			requestURL = this.createUrl(requestURL, httpmethod, args);
			return  this.http.get(requestURL, endpoint =='login'? headers1:headers)
			.pipe(map(data => data),
            catchError(this.handleError('Error in getting data', []))
			);
		

  }
	postData(endpoint:string, args = {}, httpmethod = 'POST'): Observable<any> {

		let requestURL = environment.baseUrl + endpoint;

		/**
		 * To covert parameters into query string
		 */

		 let token = localStorage.getItem('token');

		 /**
		  * Common header to call and varify all APIs 
		  * for more info contact jayesh sharda sir and akshay patidar sir.
		  * @param 'Authorization': authstr.toString(),
		  * @param 'Authtimestamp':currentTimestaps
		  * @return authenticate the all endpoints
		  */
		 let headers = {
			 headers: new HttpHeaders({
				 'Accept': 'application/json',
				 'Authorization' : `Bearer `+ token,
			 })
		 };
	
	return this.http.post(requestURL, args,endpoint == '/api/N_UserEmployee/Authenticate'? headers1:headers ) 
		.pipe(map(data => data),
			catchError(this.handleError('Error in getting data', []))
	);

  }
	putData(endpoint:string, args = {}, httpmethod = 'GET'): Observable<any> {

		let requestURL = environment.baseUrl + endpoint;
		let token = localStorage.getItem('token');

		/**
		 * Common header to call and varify all APIs 
		 * for more info contact jayesh sharda sir and akshay patidar sir.
		 * @param 'Authorization': authstr.toString(),
		 * @param 'Authtimestamp':currentTimestaps
		 * @return authenticate the all endpoints
		 */
		let headers = {
			headers: new HttpHeaders({
				'Accept': 'application/json',
				'Authorization' : `Bearer `+ token,
			})
		};
			return this.http.put(requestURL,args, headers) 
				.pipe(map(data => data),
					catchError(this.handleError('Error in getting data', []))
				);
  }

	deleteData(endpoint:string, args = {}, httpmethod = 'delete'): Observable<any> {

		let requestURL = environment.baseUrl + endpoint;

		let options = {
			headers: new HttpHeaders({
				'Accept': 'application/json',
				'Authorization' : `Bearer `+ token,
			}),
			body: args,
		  };
		//   let options = new RequestOptionsArgs({
		// 	headers: headers,
		// 	body: args
		//  })
					// requestURL = this.createUrl(requestURL, httpmethod, args);

	    return  this.http.delete(requestURL,options) 
				.pipe(map(data => data),
					catchError(this.handleError('Error in getting data', []))
				);


  }


	/**
	 * Create request url with params and required options
	 * @param requestURI string
	 * @param args objext
	 * @param httpmethod get/put/post/delete
	 * @return string
	 */
	createUrl(requestURI:any, httpmethod:any, args:any) {
		let parameters:any = {};

		if (httpmethod === 'GET') {
	
			if (Object.keys(args).length > 0) {
				for (const key in args) {
					parameters[key] = args[key];
				}
			}
		}

		requestURI = requestURI + '?' + this.toQueryString(parameters); // To covert parameters into query string

		return requestURI;
	}

	/**
	 * @param obj object
	 * @return string
	 */
	private toQueryString(obj:any) {
		const parts = [];

		for (const i in obj) {
			if (obj.hasOwnProperty(i)) {
				parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
			}
		}

		return parts.join('&');
	}

	/**
	 * Handle error
	 * @param operation
	 * @param result
	 */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => { // TODO: send the error to remote logging infrastructure
			return of(result as T);
		};
	}

	/**
	 * Show a notification
	 *
	 * @param {string} type    Notification type
	 * @param {string} message Notification message
	 */
	showNotification( type: string, message: string ): void {
		// console.log('runn notifications', type,message)
		this.notifier.notify( type, message );
	}
	/**
	 * Show a notification
	 *
	 * @param {string} type    Notification type
	 */
	 loader( type: string  ): void {
		// console.log('runn notifications', type)
		if(type == 'start'){
			this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId

		} else{
			this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId

		}
		// Stop the foreground loading after 5s
	}
	/**
	 * conver date
	 *
	 * @param {string} inputFormat date   
	 * @returns {string} date  dd/mm/yyyy
	 */
	 convertDate(inputFormat:any) {
		// function pad(s:any) { return (s < 10) ? '0' + s : s; }
		var d = new Date(inputFormat)
		return d.getDate() +'/'+(d.getMonth()+1)+'/'+ d.getFullYear()
	  }
}
