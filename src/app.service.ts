import { Injectable } from '@nestjs/common';
import { fetch } from 'wtf_wikipedia';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
     const doc = await fetch("Tisch", {
        lang: "de",
      });

      console.log(doc['_title']);
    return doc['_title'];
  }
}
