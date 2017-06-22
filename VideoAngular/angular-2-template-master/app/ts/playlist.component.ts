import {Component,Input,Output,EventEmitter}  from 'angular2/core';
import {Video} from './video';

@Component({
selector:'playlist',
templateUrl:'app/ts/playlist.component.html'

})

export class PlaylistComponent{
 @Input() videos:Array<Video>;
 @Output() onSelectedVideo=new EventEmitter<Video>();
 current:Video;
 ngOnInit(){
this.current=this.videos[0];
}
 onSelect(video:Video){
        this.onSelectedVideo.emit(video);
        this.current=video;

    }

}