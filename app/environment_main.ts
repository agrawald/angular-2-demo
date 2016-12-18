import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./environment_app.component";
import { JSONP_PROVIDERS } from 'angular2/http';

bootstrap(AppComponent, [JSONP_PROVIDERS]);
