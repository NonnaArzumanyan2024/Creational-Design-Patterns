#🏗️ Creational Design Patterns in TypeScript

This repository contains TypeScript examples of all five Creational Design Patterns.

It includes detailed theory, practical examples, and real-life analogies to help you understand how and why each pattern is used.


##Introduction to Creational Design Patterns

Creational Design Patterns are design patterns that deal with object creation mechanisms.
They help programmers create objects in a controlled, flexible, and reusable way.

Why use Creational Patterns?
Flexibility: You can create objects in multiple ways without changing existing code.
Reusability: Avoid repetitive code and centralize object creation.
Scalability: Makes it easy to add new types or variations of objects.
Maintainability: Keeps code organized and reduces tight coupling.


### 5 Creational Patterns

1. Factory Method
Purpose: Lets a class create objects without specifying their exact class.
How it works: A base class defines a method (factory method) that subclasses override to decide which object to create.
Example: Creating Mario, Goomba, or Coin objects in a game level.
Key Benefit: Easily add new game characters without modifying the main code.

2. Abstract Factory
Purpose: Produces families of related objects without specifying their concrete classes.
How it works: An abstract factory defines methods for creating different types of related objects. Concrete factories implement these methods for specific themes.
Example: Different game levels (Forest, Beach) with themed enemies and collectibles.
Key Benefit: Keeps objects consistent across a family (e.g., level theme) and reduces coupling.

3. Builder
Purpose: Builds complex objects step by step, especially when objects have many optional features.
How it works: A builder class provides methods to set different parts of the object. After configuration, a build() method returns the final object.
Example: Creating gym memberships with options like personal training, swimming pool access, diet plans, and duration.
Key Benefit: Provides a fluent interface, improves readability, and makes adding new options easy.

4. Prototype
Purpose: Creates new objects by cloning existing ones, instead of creating from scratch.
How it works: The object implements a clone() method that returns a copy with the same properties.
Example: Quickly duplicating gym memberships.
Key Benefit: Saves time when creating objects with similar data and reduces repetitive code.

5. Singleton
Purpose: Ensures only one instance of a class exists and provides a global access point.
How it works: The class has a private constructor and a static getInstance() method that returns the single instance.
Example: A centralized database for gym memberships so all parts of the app share the same data.
Key Benefit: Guarantees consistent state, avoids duplicate resources, and centralizes control.
