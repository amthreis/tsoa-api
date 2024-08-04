import express, { json, Request, Response, urlencoded } from "express"
import { RegisterRoutes } from "./routes";
import swaggerUi from "swagger-ui-express";
import { ValidationService } from "tsoa";

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())

app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
    return res.send(
      swaggerUi.generateHTML(await import("./swagger.json"))
    );
});

ValidationService.prototype.ValidateParam = (
  property,
  rawValue,
  name = '',
  fieldErrors,
  parent = true,
  minimalSwaggerConfig
) => rawValue;

RegisterRoutes.prototype.getValidatedArgs = (
  args: any,
  request: any,
  response: any
) => Object.keys(args);

RegisterRoutes(app);

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`))