const fastify = require('fastify')({ logger: true });
fastify.register(require('fastify-cors'), {});
fastify.register(require('fastify-bcrypt'), {
	saltWorkFactor: 12,
});
fastify.register(require('fastify-jwt'), {
	secret: 'testTaskSecret2',
});
require('dotenv').config()

const databaseUser =  process.env.DB_USER;
const databaseUserPassword = process.env.DB_PASSWORD;
const database = process.env.DB;
const port = process.env.PORT;

fastify.register(require('fastify-postgres'), {
	connectionString: `postgres://${databaseUser}:${databaseUserPassword}@localhost/${database}`,
});

fastify.post('/signUp', (req, reply) => {
	return fastify.pg.transact(async (client) => {
		const hashPassword = await fastify.bcrypt.hash(req.body.password);
		await client.query('INSERT INTO users(username, paswd) VALUES($1, $2)', [req.body.username, hashPassword]);
		const userId = await client.query('SELECT id FROM users WHERE username=$1', [req.body.username]);
		reply.send({
			isValid: true,
			userId: userId.rows[0].id,
			token: fastify.jwt.sign({ username: req.body.username }),
		});
	});
});

fastify.post('/auth', (req, reply) => {
	return fastify.pg.transact(async (client) => {
		const user = await client.query('SELECT * FROM users WHERE username=$1', [req.body.username]);
		const isValid =
			user.rows.length > 0 ? await fastify.bcrypt.compare(req.body.password, user.rows[0].paswd) : 'false';
		reply.send({
			isValid: isValid,
			userId: isValid ? user.rows[0].id : null,
			token: isValid ? fastify.jwt.sign({ username: req.body.username }) : null,
		});
	});
});

fastify.get('/timeslot/:user_id', (req, reply) => {
	fastify.pg.connect(onConnect);
	function onConnect(err, client, release) {
		if (err) return reply.send(err);

		client.query('SELECT * FROM slots WHERE user_id=$1', [req.query.user_id], function onResult(err, result) {
			release();
			reply.send(err || result.rows);
		});
	}
});

fastify.post('/timeslot', (req, reply) => {
	fastify.jwt.verify(req.body.token);
	return fastify.pg.transact(async (client) => {
		await client.query('DELETE FROM slots WHERE user_id=$1', [req.body.userId]);

		req.body.arrayDate.map((value) => {
			client.query('INSERT INTO slots(value, user_id) VALUES($1, $2)', [value, req.body.userId]);
		});
		return 'success';
	});
});

const start = async () => {
	try {
		await fastify.listen(port);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};
start();
