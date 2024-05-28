import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitatslucayerayComponent } from './habilitatslucayeray.component';

describe('HabilitatslucayerayComponent', () => {
  let component: HabilitatslucayerayComponent;
  let fixture: ComponentFixture<HabilitatslucayerayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilitatslucayerayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabilitatslucayerayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
