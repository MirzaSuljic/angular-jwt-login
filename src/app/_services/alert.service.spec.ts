import { TestBed } from '@angular/core/testing';

import { AlertType } from '../enums/alert-type.enum';
import { Alert } from '../_models/alert';
import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });

  it('should emit a success alert on the default id', () => {
    let received: Alert | undefined;
    service.onAlert().subscribe((a) => (received = a));

    service.success('Saved');

    expect(received?.type).toBe(AlertType.Success);
    expect(received?.message).toBe('Saved');
    expect(received?.autoClose).toBe(true);
  });
});
