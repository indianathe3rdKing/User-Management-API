import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { create } from "domain";
import { eventNames } from "process";

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  const method = event.requestContext.http.method;
  const path = event.requestContext.http.path;

  try {
    if (path === "/users") {
      switch (method) {
        case "GET":
          return getAllusers(event);
        case "POST":
          return createUser(event);
        default:
          return {
            statusCode: 400,
            body: JSON.stringify({
              message: "Unsupported HTTP method for /users path",
            }),
          };
      }
    }

    if (path.startsWith("/users/")){
        const userId = path.split("/")[1]
        if(!userId){
            return{
                statusCode: 400,
                body: JSON.stringify({
                    message: "User ID is required"
                })
            }
        }

        switch(method){
            case "GET":
                return getUser(userId)
            case "PUT":
                return updateUser(event,userId)
            case "DELETE"
                return deleteUser(userId)        
            default:
                return{
                    statusCode: 400,
                    body: JSON.stringify({
                        message: `Unsupported HTTP method for /users/${userId} path`,
                    })
                }

        }
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: `Internal server error: ${error}`,
      }),
    };
  }
};


async function getAllusers(
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Get all users",
    }),
  };
}

async function createUser(event:APIGatewayProxyEventV2):Promise<APIGatewayProxyResultV2> {
    
}