import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class GlobalEventsManager {
    public showMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
}