import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from "@angular/router";



@Component({
  selector: 'my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css'],
})
  
export class MyHeroesComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(
    private router: Router,
    private heroService: HeroService){}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
   ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  gotoDetail():void{
    this.router.navigate(['./detail', this.selectedHero.id]);
  }
}
