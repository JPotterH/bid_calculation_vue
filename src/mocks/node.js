import { setupServer } from "msw/node";
import { restHandlers } from "@/mocks/handlers";

export const server = setupServer(...restHandlers);
