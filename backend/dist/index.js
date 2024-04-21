"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//entry point of server
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const MyUserRoute_1 = __importDefault(require("./routes/MyUserRoute"));
//connect database
mongoose_1.default
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log("Connected to database!"));
const app = (0, express_1.default)();
// adds middleware to my Express application that automatically parses incoming requests with JSON payloads.
// It allows the server to easily read JSON data sent in the body of requests, which is common in API communication.
app.use(express_1.default.json());
//This line enables CORS (Cross-Origin Resource Sharing) on your server.
//CORS is a security feature that allows or restricts requests to your server based on the origin (i.e., the domain) of the request.
//Without this, web applications hosted on different domains from your server wouldn't be able to interact with it.
app.use((0, cors_1.default)());
app.get("/health", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ message: "health OK!" });
}));
// if user goes to /api/my/user, server gets to the MyUserRoute.ts
app.use("/api/my/user", MyUserRoute_1.default);
app.listen(4000, () => {
    console.log("server started on localhost:4000");
});
