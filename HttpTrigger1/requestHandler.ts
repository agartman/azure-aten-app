import { HttpRequest } from "@azure/functions";

export const handleRequest = async (req: HttpRequest) => {
  const name = req.query.name || (req.body && req.body.name);
  return { body: "Hello " + name };
};
