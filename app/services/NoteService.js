var axios = require('axios');

var NoteService = {

    getNoteById: function(id) {
        return axios.get('http://localhost:8080/api/notes/' + id);
    },

    getAllNotes: function() {
        return axios.get('http://localhost:8080/api/notes');
    }
}

module.exports = NoteService;