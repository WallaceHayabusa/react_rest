var React = require('react');
var createReactClass = require('create-react-class');
var NoteService = require('../services/NoteService');

var Note = createReactClass({

    getInitialState: function() {
        return {
            note: null
        };
    },

    handleSubmit: function(e) {
        e.preventDefault();

        NoteService.getAllNotes().then(function(response) {
            console.log(response);
        });
    },

    render: function() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" className="btn btn-primary">Buscar</button>
                </form>
            </div>
        );
    }
});

module.exports = Note;