import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { ClusterStyle, ClusterOptions } from '@agm/js-marker-clusterer/services/google-clusterer-types';
import { SignalrService } from 'src/app/core/services/signalr.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  clusterStyles: ClusterStyle[];
  clusterOptions: ClusterOptions;

  constructor(public signalRService: SignalrService) { }

  ngOnInit() {

    this.clusterStyles = [
      {
          textColor: "#2f3640",
          url: "https://googlemaps.github.io/js-marker-clusterer/images/m",
          height: 58,
          width: 58,
          anchor: [32, 0],
      }
  ];
  this.signalRService.startConnection();
  this.signalRService.onSendCarSignalRByGroup();

  }
   // google maps zoom level
   zoom: number = 8;
  
   // initial center position for the map
   lat: number = 51.673858;
   lng: number = 7.815982;
 
   clickedMarker(label: string, index: number) {
     console.log(`clicked the marker: ${label || index}`)
   }
   
   mapClicked($event: MouseEvent) {
    this.signalRService.JoinGroupByVehicleId();

     this.markers.push({
       lat: $event.coords.lat,
       lng: $event.coords.lng,
       draggable: true
     });
   }
   
   markerDragEnd(m: marker, $event: MouseEvent) {
     console.log('dragEnd', m, $event);
   }
   
   markers: marker[] = [
     {
       lat: 51.673858,
       lng: 7.815982,
       label: 'A',
       draggable: true
     },
     {
       lat: 51.373858,
       lng: 7.215982,
       label: 'B',
       draggable: false
     },
     {
       lat: 51.723858,
       lng: 7.895982,
       label: 'C',
       draggable: true
     }
   ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

