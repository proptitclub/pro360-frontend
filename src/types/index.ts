export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  meta?: any;
}

export enum EViewType {
  LIST = 'List',
  WEEK = 'Week',
  MONTH = 'Month',
}
