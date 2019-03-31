/**
 * Item Model
 */
export class Item {
    public id: number;
    public name: string;
    public category: string;
    public rating: number;

    constructor( name: string, category: string, rating: number ) { 
        // Convert first leter in Uppercase.
        this.name = name.charAt(0).toLocaleUpperCase() + name.slice(1);
        this.category = category;
        this.rating = rating;
        let max: number  = 4000;
        let min: number = 1000;
        // Get a Ramdom ID
        this.id = Math.floor(Math.random() * (max - min) + min);
    }
}
