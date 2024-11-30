import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsShopperDetailComponent } from './items-shopper-detail.component';

describe('ItemsShopperDetailComponent', () => {
  let component: ItemsShopperDetailComponent;
  let fixture: ComponentFixture<ItemsShopperDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsShopperDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsShopperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
