import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { ZecommerceComponent } from './zecommerce.component';

describe('ZecommerceComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZecommerceComponent],
      imports: [RouterModule.forRoot([], { useHash: true })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ZecommerceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
