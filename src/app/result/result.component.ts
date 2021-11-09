import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResultPageService } from './services/result-page.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  arSubsciption: Subscription;
  reverseName: string = '';
  name: string = '';

  constructor(
    private ar: ActivatedRoute,
    private resultPageService: ResultPageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.arSubsciption = this.ar.params.subscribe(params => {
      this.name = params.name;
      this.reverseName = this.resultPageService.reverseName(params.name);
    })
  }
  ngOnDestroy(): void {
    this.arSubsciption.unsubscribe();
  }

  backHome() {
    this.router.navigate(['']);
  }

}
