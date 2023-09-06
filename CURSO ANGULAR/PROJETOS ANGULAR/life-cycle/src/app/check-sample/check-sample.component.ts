import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy
} from '@angular/core';

@Component({
	selector: 'app-check-sample',
	templateUrl: './check-sample.component.html',
	styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
	implements
		OnInit,
		DoCheck,
		AfterContentChecked,
		AfterContentInit,
		AfterViewChecked,
		AfterViewInit,
		OnDestroy
{

	quantidade:number = 0

	constructor() {}

	adicionar() {
		this.quantidade += 1
	}

	decrementar(){
		this.quantidade -= 1
	}

	// checked -> content -> view

	//quando o primeiro conteudo é iniciado
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit")
	}

	//depois da inicialização da view
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked")
	}

	//após alguma alteração verifica o conteudo
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit")
	}

	//após alguma alteração verifica a view
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked")
	}
	ngDoCheck(): void {
		console.log("ngDoCheck")
	}

	ngOnInit(): void {
		console.log("ngOnInit")
	}

	ngOnDestroy(): void {
		console.log("goodbye my friend")
	}

}
