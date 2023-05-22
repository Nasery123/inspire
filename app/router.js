import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuoteController } from "./controllers/QuoteController.js";

import { TodosController } from "./controllers/TodosController.js";
import { WeatherController } from "./controllers/WeatherController.js";

export const router = [
  {
    path: '',
    controller: [HomeController, TodosController, WeatherController, QuoteController]
  }

]
