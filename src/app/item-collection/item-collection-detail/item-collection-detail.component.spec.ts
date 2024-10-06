import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCollectionDetailComponent } from './item-collection-detail.component';

describe('ItemCollectionDetailComponent', () => {
  let component: ItemCollectionDetailComponent;
  let fixture: ComponentFixture<ItemCollectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCollectionDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCollectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
