import { ElectronModule } from 'annotatron';
import { EchoModule } from './echo-module/echo.module';

@ElectronModule({
  imports: [
    EchoModule,
  ],
  providers: [
    // Add providers/services here
  ],
})
export class ApplicationModule {}