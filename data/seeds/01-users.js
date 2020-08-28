exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('users').then(function () {
		// Inserts seed entries
		return knex('users').insert([
			{
				id: 1,
				name: 'Howard Newman',
				username: 'hnewman',
				email: 'h@newman.com',
				password: '123456',
			},
			{
				id: 2,
				name: 'Thomas Casidy',
				username: 'tcasidy',
				email: 't@casidy.com',
				password: '123456',
			},
			{
				id: 3,
				name: 'Pablo Gonzolez',
				username: 'gonzo',
				email: 'p@gonzo.com',
				password: '123456',
			},
		]);
	});
};
