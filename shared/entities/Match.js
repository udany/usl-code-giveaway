import Entity from '../base/Entity';

class Match extends Entity {}

Match.Register();

Match.Attributes = [
    new Entity.Attributes.Integer('id'),
    new Entity.Attributes.Integer('user1'),
    new Entity.Attributes.Integer('user2'),
    new Entity.Attributes.Date('datetime')
];

export default Match;