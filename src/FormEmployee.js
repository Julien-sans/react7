import React, { Component } from 'react';

class FormEmployee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

 submitForm(e) {
    e.preventDefault();
    fetch('http://92.175.11.66:3001/api/quests/movies/', {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(this.state),
   })
    .then(response => response.json())
     .then(response => {
       if (response.error) {
         alert(response.error);
       } else {
         alert(`Film ajouté avec l'ID ${response}!`);
       }
     }).catch(e => {
       console.error(e);
       alert('Erreur lors de l\'ajout d\'un film');
     });
}

  render() {

    return (
      <div className="FormEmployee">

      <h1>Saisi d'un film</h1>

      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Informations</legend>

          <div className="form-data">
            <label htmlFor="name">Nom du film</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.onChange}
              value={this.state.lastname}
            />
          </div>

          <div className="form-data">
            <label htmlFor="poster">URL du film</label>
            <input
              type="text"
              id="poster"
              name="poster"
              onChange={this.onChange}
              value={this.state.firstname}
            />
          </div>

          <div className="form-data">
            <label htmlFor="comment">Comment</label>
            <textarea
              type="email"
              id="comment"
              name="comment"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <hr />

          <div className="form-data">
            <input type="submit" value="Envoyer" />
          </div>

        </fieldset>
      </form>

    </div>

  )}
}

export default FormEmployee;
