import { createConnection } from 'mysql2';

export default createConnection({
  host: 'mysql_server',
  user: 'test',
  database: 'pet_project',
  password: '1234',
}).promise();
