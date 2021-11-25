class Circuit {
   
    way = ['r', 'c', 'r', 'c', 'r', 'c', 'r'];
   name;
    constructor(name) {this.name = name;}
    getStetch(distance) {
        return this.way[
        distance % 100 - distance % 100 % this.way.length
        ]
    }
}
