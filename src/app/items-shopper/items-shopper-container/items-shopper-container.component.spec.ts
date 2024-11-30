import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsShopperContainerComponent } from './items-shopper-container.component';

describe('ItemsShopperContainerComponent', () => {
  let component: ItemsShopperContainerComponent;
  let fixture: ComponentFixture<ItemsShopperContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsShopperContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsShopperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
