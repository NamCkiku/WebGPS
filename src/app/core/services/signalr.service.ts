import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { HttpHeaders } from '@angular/common/http';

const headers: HttpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  public data: string[];

  private hubConnection: signalR.HubConnection

  constructor() { }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:8065/onlineHub?PK_UserID=NAmCkiku', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      }).configureLogging(signalR.LogLevel.Information)
        .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public onSendCarSignalRByGroup = () => {
    this.hubConnection.on('SendCarSignalRByGroup', (data) => {
      this.data = data;
      console.log(data);
    });
  }

  public JoinGroupByVehicleId = () => {
    console.log("JoinGroupByVehicleId");
    this.hubConnection.invoke('JoinGroupByVehicleId', "12345,1245,1234,1234545")
    .catch(err => console.log(err));
  }

}
