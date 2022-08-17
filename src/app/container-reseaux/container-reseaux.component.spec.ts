import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerReseauxComponent } from './container-reseaux.component';

describe('ContainerReseauxComponent', () => {
  let component: ContainerReseauxComponent;
  let fixture: ComponentFixture<ContainerReseauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerReseauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerReseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
