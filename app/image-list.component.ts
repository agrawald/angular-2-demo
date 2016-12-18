  import {Component, OnInit} from "angular2/core";
  import {ImageService} from "./image.service";
  import {Image} from "./image";

  @Component({
    selector: "img-list",
    template: `
      <div class="input-group">
        <span class="input-group-addon" id="tags"><span class="glyphicon glyphicon-search"></span></span>
        <input #tags class="form-control" type="text" (keyup)="getImages(tags.value)" placeholder="Search" aria-describedby="tags">
      </div>
      <div class="panel panel-default">
        <div class="panel-body">
          <div *ngIf="errorMessage" class="alert alert-danger">
            <strong>{{errorMessage}}</strong>
          </div>
          <br>
          <div class="row">
            <div class="col-lg-3 col-md-4 col-xs-6 thumb" *ngFor="#img of images">
              <div class="thumbnail">
                <a href="{{img.media.m}}" ><img src="{{img.media.m}}" class="img-responsive" width=100% height=100%></a>
                <div class="caption">
                  <a href="{{img.link}}"><h3>{{img.title}}</h3></a>
                  <p><strong>Author</strong>: {{ img.author }} </p>
                  <p>{{img.tags}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    providers: [ImageService]
  })

  export class ImgListComponent implements OnInit {
    public images: Image[];
    constructor(private _imgService: ImageService) {}

    getImages(tags){
      this._imgService.getImages(tags).subscribe(
            images => this.images=images,
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): any{
      this.getImages('');
    }
  }
