import { app } from "./server";

const port = process.env.PORT || 4000;

const main = () => {
  app.listen(port);
  console.log(
    `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
  );
};

main();
