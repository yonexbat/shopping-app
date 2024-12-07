import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShopperDetailComponent } from './item-shopper-detail.component';

describe('ItemShopperDetailComponent', () => {
  let component: ItemShopperDetailComponent;
  let fixture: ComponentFixture<ItemShopperDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemShopperDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemShopperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
