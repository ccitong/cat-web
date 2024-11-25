import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatServicesComponent } from './chat-services.component';

describe('ChatServicesComponent', () => {
  let component: ChatServicesComponent;
  let fixture: ComponentFixture<ChatServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatServicesComponent]
    });
    fixture = TestBed.createComponent(ChatServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
