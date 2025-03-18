import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResimRequestComponent } from './resim-request.component';

describe('ResimRequestComponent', () => {
  let component: ResimRequestComponent;
  let fixture: ComponentFixture<ResimRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResimRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResimRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
