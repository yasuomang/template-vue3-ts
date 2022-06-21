import Request from "@/api/index";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $api: typeof Request.requestMethod;
  }
}
