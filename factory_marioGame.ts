/*
Simple Game Level Example using Factory Method Pattern

Factory Method Design Pattern:
- A creational design pattern that lets a class defer the instantiation of objects to subclasses.
- Instead of creating objects directly in the main code, you define a method (the "factory method") that subclasses override to specify which object to create.
- This promotes flexibility, reduces coupling, and makes adding new types easy.

How it works in this code:
1. `GameLevel` is an abstract class that defines a common `run()` method.
2. The abstract method `loadEnemy()` acts as the factory method.
   - Subclasses (`ForestLevel`, `BeachLevel`) implement `loadEnemy()` to decide which enemy to create.
3. Enemies implement the `IEnemy` interface, which requires the `attack()` method.
4. When `run()` is called, it uses the factory method to get the enemy and then calls `attack()`.

Benefits demonstrated here:
- Each level can produce a different enemy without changing the base class.
- Adding new levels or enemies is easy — just create a new class.
- Main code (`start()` function) doesn’t need to know which specific enemy is used.

This is a clean and beginner-friendly example of the Factory Method pattern in TypeScript.
*/




// ================= Interfaces =================
// Define a common interface for all enemies
// Every enemy must have an attack() method
interface IEnemy {
    attack(): void; 
}


// ================= Enemy Classes =================
// Mushroom enemy class implementing IEnemy
class Mushroom implements IEnemy {
    // Each enemy must implement attack()
    attack(): void {
        console.log("I am Mushroom and I attack!"); // Mushroom attack message
    }
}

// Turtle enemy class implementing IEnemy
class Turtle implements IEnemy {
    attack(): void {
        console.log("I am Turtle and I attack!"); // Turtle attack message
    }
}


// ================= Abstract Game Level =================
// Abstract base class for all game levels
// Defines the structure of a level and a factory method for enemies
abstract class GameLevel {
    // Abstract factory method to create an enemy
    // Each subclass must implement this method
    abstract loadEnemy(): IEnemy;

    // Common method to run the level
    // Uses the factory method to get the enemy and then makes it attack
    run(): void {
        const enemy = this.loadEnemy(); // Call factory method
        enemy.attack();                 // Enemy attacks
    }
}


// ================= Specific Levels =================
// ForestLevel produces a Mushroom enemy
class ForestLevel extends GameLevel {
    // Implement the factory method
    loadEnemy(): IEnemy {
        return new Mushroom(); // Return a Mushroom enemy
    }
}

// BeachLevel produces a Turtle enemy
class BeachLevel extends GameLevel {
    loadEnemy(): IEnemy {
        return new Turtle(); // Return a Turtle enemy
    }
}


// ================= Run Levels =================
// Function to start a level
// Takes any object that extends GameLevel
function start(level: GameLevel): void {
    level.run(); // Run the level
}


// ================= Usage =================
// Start ForestLevel
start(new ForestLevel()); // Output: I am Mushroom and I attack!

// Start BeachLevel
start(new BeachLevel());  // Output: I am Turtle and I attack!
