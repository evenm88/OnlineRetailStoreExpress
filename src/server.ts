import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import orderRoute from './routes/orders.route';
import ProductRoute from './routes/products.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new ProductRoute(), new orderRoute(),new AuthRoute()]);

app.listen();
