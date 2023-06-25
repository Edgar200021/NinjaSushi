const express = require('express'),
  sqlite3 = require('sqlite3').verbose(),
  cors = require('cors'),
  app = express(),
  port = 3001,
  dataBase = new sqlite3.Database('./data/database.db')

app.use(express.json())
app.use(cors())


app.get('/news', (req, res) => {
  dataBase.all('SELECT * FROM news', [], (err, data) => {
    if (err) {
      console.error(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/news', (req, res) => {
	const { id, img, genre, date, description } = req.body;
  
	dataBase.run(
	  'INSERT INTO news (id, img, genre, date, description) VALUES (?, ?, ?, ?, ?)',
	  [id, img, genre, date, description],
	  function(err) {
		if (err) {
		  console.error(err);
		} else {
		  res.send(`News with genre ${genre} created successfully`);
		}
	  }
	);
  });

  app.put('/news/:id', (req, res) => {
	const id = req.params.id;
	const { img, genre, date, description } = req.body;
  
	dataBase.run(
	  'UPDATE news SET img = ?, genre = ?, date = ?, description = ? WHERE id = ?',
	  [img, genre, date, description, id],
	  function(err) {
		if (err) {
		  console.error(err);
		  res.status(500).send('Internal Server Error');
		} else {
		  res.send(`News with ID ${id} updated successfully`);
		}
	  }
	);
  });

  app.delete('/news/:id', (req, res) => {
	const id = req.params.id;
	
	dataBase.run('DELETE FROM news WHERE id = ?', id, function(err) {
	  if (err) {
		console.error(err);
	  } else {
		res.send(`News with ID ${id} deleted successfully`);
	  }
	});
  });


  app.get('/users', (req, res) => {
	dataBase.all('SELECT * FROM users', [], (err, data) => {
	  if (err) {
		console.error(err)
	  } else {
		res.send(data)
	  }
	})
  })


  app.post('/users', (req, res) => {
	const { id, name, email, password} = req.body;
  
	dataBase.run(
	  'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)',
	  [id, name, email, password],
	  function(err) {
		if (err) {
		  console.error(err);
		} else {
		  res.send({id, name, email, password});
		}
	  }
	);
  })
  app.delete('/users/:id', (req, res) => {
	const id = req.params.id
  
	dataBase.run(
	  'DELETE FROM users WHERE id = ?',
	  id,
	  function(err) {
		if (err) {
		  console.error(err);
		} else {
		  res.send(`User with id ${id} is deleted`);
		}
	  }
	);
  })



  

app.listen(port)
