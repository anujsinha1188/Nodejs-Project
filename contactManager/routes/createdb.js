export function create (req, res) {
    nano.db.create(req.body.dbname, () => {
        if (err) {
            res.send("Error creating the Database.");
            return;
        }
        res.send("Database created successfully.");
    });
}