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
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
/**
 * @category Test API
 * @param route /api
 * @returns Object {title: "home"}
 */
app.get('/api', (req, res) => {
    return res.json({ title: "home" });
});
app.get('/api/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findUnique({
        where: { id: 1 }
    });
    console.log('api/test');
    return res.json(user);
}));
app.get('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    return res.json(users);
}));
app.get('/api/trips', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trips = yield prisma.trip.findMany({
        include: {
            story: {
                select: {
                    title: true,
                    text: true
                }
            },
            images: {
                select: {
                    title: true,
                    imageUrl: true
                }
            },
            catches: {
                select: {
                    kind: true,
                    weight: true,
                    length: true,
                    imageUrl: {
                        select: {
                            imageUrl: true
                        }
                    }
                },
            },
        }
    });
    return res.json(trips);
}));
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
