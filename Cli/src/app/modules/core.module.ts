import { NgModule } from '@angular/core';
import { BarcodeDecoderService } from '../service/barcode-decoder.service';
import { BarcodeValidatorService } from '../service/barcode-validator.service';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    BarcodeValidatorService,
    BarcodeDecoderService,
  ],
  exports: [
    SharedModule,
  ],
})

export class CoreModule {}
