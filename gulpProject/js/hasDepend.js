define(["./index","./canvas"], function(index, canvas) {
        //return an object to define the "my/shirt" module.
        return {
            color: index.color,
            size: "large",
            addToCart: function() {
                inventory.decrement(this);
                cart.add(this);
            }
        }
    }
);