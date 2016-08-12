import delay from './delay';

const actors = [
    { id: 1, name: "Tom Hanks" },
    { id: 2, name: "Clint Eastwood" },
    { id: 3, name: "Vlasta Burian" },
    { id: 4, name: "Harrison Ford" }
];

export default class ActorsApi {
    static get(id) {
        return new Promise((resolve, reject) => {
            const actor = actors.find(a => a.id == id);
            if (actor) {
                resolve(actor);
            } else {
                reject();
            }
        });
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(actors);
            }, delay);
        });
    }
}