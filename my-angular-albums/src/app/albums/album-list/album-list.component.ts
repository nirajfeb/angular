import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
 // import { Album } from "../albums.data";
import { ALBUMS } from "../albums.data";
import { AlbumService } from '../shared/album.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  // albumsArray: Album[];
  albumsArray: Observable<Album[]>;

  constructor( private albumService: AlbumService) { }

  parentFunctionHandler(album) {
    alert('Album ' + album.albumName + ' was sent from the album card component');
}

// getAlbums() {
//  this.albumService.getAlbums()
//  .subscribe(
//      albums => this.albumsArray = albums,
//      error => console.log("Error: ", error));
// }
getAlbums() {
  this.albumsArray = this.albumService.getAlbums();
}
  ngOnInit() {
    this.getAlbums();
  }

}
