import { HttpRequest } from "@azure/functions";
import { handleRequest } from "./requestHandler";

test("should return right greeting", async () => {
  const { body } = await handleRequest({
    query: {
      name: "Atte",
    },
  } as unknown as HttpRequest);

  expect(body).toBe("Hello Atte");
});
