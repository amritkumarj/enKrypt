import type { Endpoint } from "@enkryptcom/extension-bridge/dist/types";
import type { ProviderName } from "./provider";
import type { OnMessageResponse } from "@enkryptcom/types";

export enum MessageType {
  WINDOW_REQUEST = "enkrypt_window_request",
  NEWWINDOW_REQUEST = "enkrypt_new_window_request",
}
export enum Destination {
  contentScript = "content-script",
  background = "background",
  window = "window",
  newWindow = "new-window",
}
export interface SendMessage {
  [key: string]: any;
  provider: ProviderName;
  message: string;
}
export interface Message extends SendMessage {
  sender: Endpoint;
}

export type onMessgeType = (
  messge: Message
) => Promise<OnMessageResponse | void>;