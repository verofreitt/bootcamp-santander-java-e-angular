import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloProjComponent } from './modulo-proj.component';

describe('ModuloProjComponent', () => {
  let component: ModuloProjComponent;
  let fixture: ComponentFixture<ModuloProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloProjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
