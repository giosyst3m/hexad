export class Item {
    public id: number;
    public name: string;
    public category: string;
    public rating: number;

    constructor( name: string, category: string, rating: number ) { 
        this.name = name.charAt(0).toLocaleUpperCase() + name.slice(1);
        this.category = category;
        this.rating = rating;
        let max: number  = 4000;
        let min: number = 1000;
        this.id = Math.floor(Math.random() * (max - min) + min);
        console.log(this.id);
    }
}
