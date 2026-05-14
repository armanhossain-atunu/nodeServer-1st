import { rejects } from "assert";
import { resolve } from "dns";
import type { IncomingMessage } from "http";

export const parseBody = (req: IncomingMessage): Promise<any> => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk() 
    })
    req.on("end", () => {
        try {
            resolve(body);
        } catch (error) {
            reject(error);
        }
    });

    // console.log("parse body" , req);
  });
  // return new Promise((resolve, reject) => {
  //     let body = '';
  //     req.on('data', (chunk: any) => {
  //         body += chunk.toString();
  //     });
  //     req.on('end', () => {
  //         try {
  //             const parsedBody = JSON.parse(body);
  //             resolve(parsedBody);
  //         } catch (error) {
  //             reject(error);
  //         }
  //     });
  // });
};
