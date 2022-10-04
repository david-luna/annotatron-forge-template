import { ElectronModule } from 'annotatron';
import { EchoService } from './echo.service';

@ElectronModule({
  imports: [
    // Add other modules here
  ],
  providers: [
    EchoService,
  ],
})
export class EchoModule {}