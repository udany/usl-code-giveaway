import {DatabaseField, DatabaseModel} from '../js/DatabaseModel';
import Match from "../../shared/entities/Match";

class MatchModel extends DatabaseModel {};

MatchModel.config({
    table: 'match',
    entity: Match,
    fields: [
        new DatabaseField({name: "user1", type: "int", length: 11}),
        new DatabaseField({name: "user2", type: "int", length: 11}),
        new DatabaseField({name: "datetime", type: "datetime"}),
    ],
});

export default MatchModel;