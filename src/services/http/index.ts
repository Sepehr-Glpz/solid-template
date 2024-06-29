import axios, { AxiosProgressEvent, AxiosRequestConfig } from "axios";

export default {
  get<TRes>(
    url: string,
    options?: { onProgress: (percent: number) => void },
  ): { promise: Promise<TRes>; cancel: () => void } {
    const ctr = new AbortController();

    const requestOptions: AxiosRequestConfig = {
      url,
      signal: ctr.signal,
    };

    if (options?.onProgress) {
      requestOptions.onDownloadProgress = (event) =>
        progressPercentCallback(event, options.onProgress);
    }

    const promise = axios<TRes>(requestOptions)
      .then((response) => response.data)
      .catch((err) => (console.warn(err) as undefined) || ({} as TRes));

    return { promise: promise, cancel: ctr.abort };
  },
};

const progressPercentCallback = (
  event: AxiosProgressEvent,
  onProgress: (percent: number) => void,
) => {
  const percent = Math.round((event.loaded * 100) / (event.total ?? 1));
  onProgress(percent);
};
