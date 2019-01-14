import { TestBed } from '@angular/core/testing';

import { LotteryResultService } from './lottery-result.service';
import { HttpClientModule } from '@angular/common/http';

describe('LotteryResultService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ]
    }));

    it('should be created', () => {
        const service: LotteryResultService = TestBed.get(LotteryResultService);
        expect(service).toBeTruthy();
    });
});
