import { Component } from '@angular/core';
import { ObservableEvent } from '@typebytes/ngx-template-streams';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  @ObservableEvent()
  clicks$: Observable<any>;

  clicked$ = this.clicks$.pipe(
    map(() => new Date().toISOString())
  );

}
