interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): void;
}

abstract class BaseHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}

class AuthHandler extends BaseHandler {
  handle(request: string): void {
    if (request.includes("auth")) {
      console.log("Аутентификация пройдена");
      super.handle(request);
    } else {
      console.log("Ошибка: пользователь не аутентифицирован");
    }
  }
}

class ValidationHandler extends BaseHandler {
  handle(request: string): void {
    if (request.length > 5) {
      console.log("Данные валидны");
      super.handle(request);
    } else {
      console.log("Ошибка: данные некорректны");
    }
  }
}

class LoggingHandler extends BaseHandler {
  handle(request: string): void {
    console.log(`Логирование запроса: ${request}`);
    super.handle(request);
  }
}

const auth = new AuthHandler();
const validation = new ValidationHandler();
const logger = new LoggingHandler();

auth.setNext(validation).setNext(logger);

console.log("Запрос 1");
auth.handle("auth valid_request"); 

console.log("Запрос 2");
auth.handle("invalid_request");

