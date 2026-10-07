"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const node_dns_1 = __importDefault(require("node:dns"));
node_dns_1.default.setServers(["1.1.1.1", "8.8.8.8"]);
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
// Routes
app.use('/api', UserRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
// // Connect to MongoDB
// mongoose.connect('mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.nx8raks.mongodb.net/?appName=Cluster0', {
// })
// .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(PORT, () => {
//         console.log(`Server is running on port http://localhost:${PORT}`);
//     });
// })
// .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });
