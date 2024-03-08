package IShape;

import Ishape.IShape;

public class Circle extends IShape {
    double radius;
    public Circle(String name, double radius) {
        super(name);
        this.radius = radius;
    }
    @Override
    public double calculateArea(){
        return this.radius * this.radius * Math.PI;
    }
}
