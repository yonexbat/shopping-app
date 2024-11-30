import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCollectionShopperContainerComponent } from './item-collection-shopper-container.component';

describe('ItemCollectionShopperContainerComponent', () => {
  let component: ItemCollectionShopperContainerComponent;
  let fixture: ComponentFixture<ItemCollectionShopperContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCollectionShopperContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCollectionShopperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
