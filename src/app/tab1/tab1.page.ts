import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  private _url: string = '';
  private domaine: string = 'https://newsapi.org/v2/everything?';
  public q: string = '';
  private newFrom: string = '';
  private sortBy: string = 'popularity';
  private apiKey: string = '5124b31088564bf081f0d3b08c47f803';
  private date: any = new Date;
  private dateMonthDat: any;
  private dataNews: any;
  public articles: any;
  private storage: any;
  private localStorage: any;

  constructor(
    private http: HttpClient,
    ) {
  }

  async onShare(titre: string , content: string , lien: string ) {
    await Share.share({
      title: titre,
      text: content,
      url: lien,
      dialogTitle: 'Partager cette actualité vers: ',
    });
  }

  ngOnInit() {
    this.q = "microsoft";
    this.dateMonthDat = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()-1}`;
    this.newFrom = this.dateMonthDat;
    this._url = `${this.domaine}q=${this.q}&from=${this.newFrom}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`;
    this.getNews(this._url);
    this.selectOnLocalStorage();
  }

  getNews(url: any) {
    this.http.get(url).subscribe(async (data)=>{
      this.dataNews = await data;
      this.articles = this.dataNews.articles;
      this.shuffleArray(this.articles);
      // console.log(this.articles);
    })
  }

  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  save(author:string, description:string, publishedAt:string, title:string, url:string, urlToImage:string) {
    this.selectOnLocalStorage();
    this.storage += `${author}&&||&&${description}&&||&&${publishedAt}&&||&&${title}&&||&&${url}&&||&&${urlToImage} ,,$$##$$,, `;
    this.setOnLocalStorage();
    // console.log(this.storage);
  }

  selectOnLocalStorage() {
    if(localStorage.getItem('save')) {
      this.localStorage = localStorage.getItem('save');
      this.storage = this.localStorage;
      // console.log(this.localStorage);
    } else {
      localStorage.setItem('save', ' ')
      // console.log("non existe");
    }
  }

  setOnLocalStorage() {
    localStorage.setItem('save', `${this.storage}`);
  }

}
