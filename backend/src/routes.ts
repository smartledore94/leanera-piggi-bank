import {getStatus} from './controllers/StatusController';
import {savePenalty, retrievePenalty} from './controllers/PiggyController';
import {editPenalty, deletePenalty} from './controllers/AdminController';

module.exports = (app) => {
    app.get('/', getStatus);

    app.post('/penalty/save', savePenalty);

    app.get('/penalty/retrieve', retrievePenalty);

    app.get('/admin/edit', editPenalty);

    app.get('admin/delete', deletePenalty);
}