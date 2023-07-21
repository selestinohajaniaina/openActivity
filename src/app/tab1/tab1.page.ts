import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  private url: string = '';
  private domaine: string = 'https://newsapi.org/v2/everything?';
  public q: string = '';
  private newFrom: string = '';
  private sortBy: string = 'popularity';
  private apiKey: string = '5124b31088564bf081f0d3b08c47f803';
  private date: any = new Date;
  private dateMonthDat: any;
  private dataNews: any;
  public articles: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.q = "microsoft";
    this.dateMonthDat = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()-1}`;
    this.newFrom = this.dateMonthDat;
    this.url = `${this.domaine}q=${this.q}&from=${this.newFrom}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`;
    this.getNews(this.url);
  }

  getNews(url: any) {
    this.http.get(url).subscribe(async (data)=>{
      this.dataNews = await data;
      this.articles = this.dataNews.articles;
      console.log(this.articles);
    })
  }

}
