import type { IncomingMessage } from "http";

export const parseBody = (req: IncomingMessage): Promise<any> => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk
    })
    req.on("end", () => {
        try {
            resolve(JSON.parse(body));
        } catch (error) {
            reject(error);
        }
    });
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
