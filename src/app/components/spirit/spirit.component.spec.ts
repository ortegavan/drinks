import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritComponent } from './spirit.component';

describe('SpiritComponent', () => {
  let component: SpiritComponent;
  let fixture: ComponentFixture<SpiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpiritComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
