"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const cors_1 = __importDefault(require("cors"));
const node_path_1 = __importDefault(require("node:path"));
const node_dns_1 = __importDefault(require("node:dns"));
node_dns_1.default.setServers(["1.1.1.1", "8.8.8.8"]);
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(node_path_1.default.join(__dirname, '../public')));
// Routes
app.use('/api', UserRoutes_1.default);
// Connect to MongoDB
mongoose_1.default.connect('mongodb+srv://iqsirawit:IQsirawit180549@cluster0.nx8raks.mongodb.net/?appName=Cluster0', {})
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
