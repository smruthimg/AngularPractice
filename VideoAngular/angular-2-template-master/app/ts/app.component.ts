import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {VideoPlayerComponent} from "./videoplayer.component";
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: "my-app",
    templateUrl: "app/ts/app.component.html",
    directives:[PlaylistComponent,VideoPlayerComponent]
})

export class AppComponent {

mainHeading=Config.MAIN_HEADING;
videos:Array<Video>;
video:Video;
constructor(){
this.videos=[new Video(1,"Angular 2 for Beginners-Tutorial","f8qBeaGe2S4","Tutorial Video"),
new Video(2,"Paper Analysis","O7Hjx3E6x0E" , "My Video")
];
this.video=this.videos[0];

}
onVideoSelected(video:Video){
this.video=video;
}
}
