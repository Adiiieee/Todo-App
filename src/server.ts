import { Elysia } from "elysia";

export const app = new Elysia().get("/", () => "Hello from bun server!");
