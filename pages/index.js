import Clock from '../components/Clock';
import { withLayout } from '../components/Layout';

const Index = () => (
  <div className="dashboard">
    <Clock />
  </div>
);

export default withLayout(Index);
