import { Injectable, Command } from 'annotatron';

@Injectable()
export class EchoService {
  @Command('echo')
  echoHandler(messsge: string): string {
    return `echo service received: ${messsge}`;
  }
}
