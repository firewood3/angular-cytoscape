import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class WorkspaceService {

  styleUpdateSubject: Subject<any>;

  constructor() {
    this.styleUpdateSubject = new Subject();
  }

  updateStyle(color: string) {
    this.styleUpdateSubject.next(color);
  }

  getStyleUpdateObservable(): Observable<any> {
    return this.styleUpdateSubject.asObservable();
  }
}
