class Polygon {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    countArea() {
        return this.width * this.height;
    }
}

class Square extends Polygon {
    constructor(length) {
        super();
        this.width = length;
        this.height = length;
    }
}

