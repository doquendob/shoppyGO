import { RequestOptions } from "../lib/types";

const dataFetch = (options: RequestOptions) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(options.httpOptions.url, { method: options.httpOptions.method });
            const data = await response.json();
            resolve(data);
        } catch (error) {
            reject(new Error(`Failed to fetch the data: ${error}`));
        }
    });
};

export default dataFetch;