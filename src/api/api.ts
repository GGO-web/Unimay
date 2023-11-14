import { AxiosRequestConfig } from 'axios';
import { AxiosBaseApiInstance } from '@config/axios';

interface AxiosRequestBaseConfig<T> extends AxiosRequestConfig<T> {
  isPublic?: boolean;
}

const DEFAULT_API_CONFIG = {
  withoutPublicOrPrivate: false,
  isPublic: false
};

export class Api {
  private readonly serviceName: string | null | undefined = null;

  protected constructor(serviceName?: string | null | undefined) {
    this.serviceName = serviceName;
  }

  private getUrl(endpoint: string) {
    if (this.serviceName) {
      return `/${this.serviceName}${endpoint}`;
    }

    return `${endpoint}`;
  }

  protected get<T, K = any>(
    endpoint: string,
    config: AxiosRequestBaseConfig<T> = DEFAULT_API_CONFIG
  ) {
    const apiConfig = { ...DEFAULT_API_CONFIG, ...config };

    return AxiosBaseApiInstance.get<K>(this.getUrl(endpoint), apiConfig);
  }

  protected async post<T, K>(
    endpoint: string,
    data?: T,
    config: AxiosRequestBaseConfig<T> = DEFAULT_API_CONFIG
  ) {
    const apiConfig = { ...DEFAULT_API_CONFIG, ...config };

    return AxiosBaseApiInstance.post<K>(this.getUrl(endpoint), data, apiConfig);
  }

  protected put<T, K>(
    endpoint: string,
    data?: T,
    config: AxiosRequestBaseConfig<T> = DEFAULT_API_CONFIG
  ) {
    const apiConfig = { ...DEFAULT_API_CONFIG, ...config };

    return AxiosBaseApiInstance.put<K>(this.getUrl(endpoint), data, apiConfig);
  }

  protected patch<T, K>(
    endpoint: string,
    data?: T,
    config: AxiosRequestBaseConfig<T> = DEFAULT_API_CONFIG
  ) {
    const apiConfig = { ...DEFAULT_API_CONFIG, ...config };

    return AxiosBaseApiInstance.patch<K>(
      this.getUrl(endpoint),
      data,
      apiConfig
    );
  }

  protected delete<T, K>(
    endpoint: string,
    config: AxiosRequestBaseConfig<T> = DEFAULT_API_CONFIG
  ) {
    const apiConfig = { ...DEFAULT_API_CONFIG, ...config };

    return AxiosBaseApiInstance.delete<K>(this.getUrl(endpoint), apiConfig);
  }
}
