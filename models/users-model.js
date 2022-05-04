const db = require('../data/db-config')

module.exports = {
    find,
    add,
    update,
    remove
};

function add(user) {
	return db("users")
		.insert(user, ["*"])
		.then(u =>
			find({
				id: u[0].id
			}).first()
		);
}


function find(filter) {
    // if filters were passed in, search by filter. otherwise return all
	// note that neither return use the .first() method -- it's on a use-by-use basis if that is required or not
	if (filter) {
		return db("users")
			.select(
				"id",
				"username",
				"email",			
				"bio",
			)
			.where(filter);
	}
	return db("users").select(
		"id",
		"username",
		"email",
		"bio",
	);
}

function update(filter, changes) {
    return db("users")
        .update(changes, ["*"])
        .where(filter)
        .then(u => {
            find({
                id: u[0].id
            }).first()
        });
}

function remove(filter) {
    return db("users")
            .where(filter)
            .del();
}