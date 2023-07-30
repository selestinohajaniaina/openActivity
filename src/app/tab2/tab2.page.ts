import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private error:string = "";
  public storage:any;
  private localStorage:any;
  public theme: string = localStorage.getItem('theme') || 'secondary';

  constructor() {}

  ngOnInit() {
    this.theme = localStorage.getItem('theme') || 'secondary';
    this.selectOnLocalStorage();
  }

  selectOnLocalStorage() {
    if(localStorage.getItem('save')) {
      this.localStorage = `${localStorage.getItem('save')}`;
      this.storage = this.localStorage.split(' ,,$$##$$,, ');
      // console.log(this.storage);
    } else {
      this.error = "Vous n'avez auccun elements enregistré ";
    }
  }

  separate(text:any):any {
    return text.split("&&||&&");
  }

}
