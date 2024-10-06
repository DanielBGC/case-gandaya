export interface BaseResponse<Json = any, Status = number> {
  json: Json;
  status: Status;
}
