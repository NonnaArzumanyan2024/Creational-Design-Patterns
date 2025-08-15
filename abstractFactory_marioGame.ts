/*
Mario Game Example using Abstract Factory Pattern

Abstract Factory Design Pattern:
- A creational pattern that lets you produce families of related objects without specifying their concrete classes.
- Instead of creating objects one by one, you create them through a factory that knows which objects belong together.
- Promotes flexibility, scalability, and easy addition of new themes/levels.

How it works in this code:
1. `IEnemy` and `ICollectible` define common interfaces for enemies and collectibles.
2. `ILevelFactory` is the abstract factory interface with methods to create enemies and collectibles.
3. `ForestFactory` and `BeachFactory` are concrete factories that produce themed objects.
4. The `runLevel()` function uses the factory to create a full set of objects without knowing the concrete classes.
5. You can easily add new factories (like LavaFactory) or new objects without changing existing code.

Benefits demonstrated here:
- Each level produces a family of related objects (enemy + collectible) consistently.
- Main code (`runLevel`) does not depend on concrete classes — reduces coupling.
- Easy to add new levels, enemies, or collectibles without modifying existing code.
- Promotes scalability and maintainability in game design.
- Shows clear separation of concerns: factories handle creation, game logic handles gameplay.

This is a beginner-friendly example of Abstract Factory in TypeScript.
*/




// ================= Interfaces =================

// Enemy interface
interface IEnemy {
    attack(): void; // Every enemy must implement attack
}

// Collectible interface
interface ICollectible {
    collect(): void; // Every collectible must implement collect
}

// Abstract Factory interface for levels
interface ILevelFactory {
    createEnemy(): IEnemy;             // Method to create an enemy
    createCollectible(): ICollectible; // Method to create a collectible
}


// ================= Concrete Products =================

// Mushroom enemy
class Mushroom implements IEnemy {
    attack(): void {
        console.log("Mushroom attacks Mario!");
    }
}

// Turtle enemy
class Turtle implements IEnemy {
    attack(): void {
        console.log("Turtle attacks Mario!");
    }
}



// Coin collectible
class Coin implements ICollectible {
    collect(): void {
        console.log("Coin collected!");
    }
}

// Star collectible
class Star implements ICollectible {
    collect(): void {
        console.log("Star collected!");
    }
}



// ================= Concrete Factories =================

// Forest level factory creates Mushroom and Coin
class ForestFactory implements ILevelFactory {
    createEnemy(): IEnemy {
        return new Mushroom();
    }

    createCollectible(): ICollectible {
        return new Coin();
    }
}

// Beach level factory creates Turtle and Star
class BeachFactory implements ILevelFactory {
    createEnemy(): IEnemy {
        return new Turtle();
    }

    createCollectible(): ICollectible {
        return new Star();
    }
}



// ================= Usage Example =================

// Function that runs a level using an abstract factory
function runLevel(factory: ILevelFactory): void {
    const enemy = factory.createEnemy();              // Create enemy using factory
    const collectible = factory.createCollectible();  // Create collectible using factory

    enemy.attack();         // Enemy attacks
    collectible.collect();  // Player collects item
}



// Running Forest Level
runLevel(new ForestFactory());
// Output: Mushroom attacks Mario! Coin collected!

// Running Beach Level
runLevel(new BeachFactory());
// Output: Turtle attacks Mario! Star collected!
