import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCollectionContainerComponent } from './item-collection-container.component';

describe('ItemCollectionContainerComponent', () => {
  let component: ItemCollectionContainerComponent;
  let fixture: ComponentFixture<ItemCollectionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCollectionContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCollectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
