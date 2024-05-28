import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelucayerayComponent } from './homelucayeray.component';

describe('HomelucayerayComponent', () => {
  let component: HomelucayerayComponent;
  let fixture: ComponentFixture<HomelucayerayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomelucayerayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomelucayerayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
