const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const dbConfig = {
  host: "db",
  user: "root",
  password: "password",
  database: "mondb",
};

let db;

function handleDisconnect() {
  db = mysql.createConnection(dbConfig); // Recreate the connection

  db.connect((err) => {
    if (err) {
      console.log("erreur lors de la connexion à db:", err);
      setTimeout(handleDisconnect, 2000); // Reconnect after 2 seconds
    } else {
      console.log("Connecté à la base de données MySQL");
    }
  });

  db.on("error", (err) => {
    console.log("Erreur de base de données:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});
