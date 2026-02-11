import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2 } from './ec2';

describe('Ec2', () => {
  let component: Ec2;
  let fixture: ComponentFixture<Ec2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ec2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ec2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
