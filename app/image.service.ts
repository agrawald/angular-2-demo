import {Injectable} from "angular2/core";
import {Jsonp, URLSearchParams, Response} from "angular2/http";
import {IMAGES} from "./image.list";
import {Observable} from "rxjs/Rx";

@Injectable()

export class ImageService {
  private flickrImageUrl = "https://api.flickr.com/services/feeds/photos_public.gne?tagmode=all&format=json&jsoncallback=JSONP_CALLBACK";

  constructor (private jsonp:Jsonp) {};

  getImages(tags): Observable<Image[]> {
    let params = new URLSearchParams();
    params.set('tags', tags); // the user's search value

    return this.jsonp.get(this.flickrImageUrl, {search: params})
              .map(this.extractData)
              .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
