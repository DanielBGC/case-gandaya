import { BaseResponse, GenericObject } from '../types';

const captureAndReturn = (
  status: number,
  error: unknown,
  errorMessage?: string | GenericObject,
  sendToSentry = true,
): BaseResponse<any> => {
  if (error instanceof Error) {
    if (status === 500) {
      return {
        status,
        json: {
          message: errorMessage,
          errorMessage: error.message,
        },
      };
    }
    return {
      status,
      json: errorMessage ?? error.message,
    };
  } else if (error instanceof SyntaxError) {
    return {
      status,
      json: error.message,
    };
  } else {
    console.error(error);
    return {
      status: 500,
      json: 'Internal Server Error',
    };
  }
};

export const badRequest = (error: unknown, errorMessage?: string | GenericObject): BaseResponse =>
  captureAndReturn(400, error, errorMessage);

export const notFound = (error: unknown, errorMessage?: string | GenericObject): BaseResponse =>
  captureAndReturn(404, error, errorMessage);

export const serverError = (error: unknown): BaseResponse =>
  captureAndReturn(500, error, 'Internal Server Error');

export const unauthorized = (
  error: unknown,
  errorMessage?: string | GenericObject,
  sendToSentry?: boolean,
): BaseResponse => captureAndReturn(401, error, errorMessage, sendToSentry);

export const forbidden = (
  error: unknown,
  errorMessage?: string | GenericObject,
  sendToSentry?: boolean,
): BaseResponse => captureAndReturn(403, error, errorMessage, sendToSentry);

export const notAcceptable = (
  error: unknown,
  errorMessage?: string | GenericObject,
): BaseResponse => captureAndReturn(406, error, errorMessage);

export const success = <T>(data: T): BaseResponse<T> => {
  return {
    status: 200,
    json: data,
  };
};
