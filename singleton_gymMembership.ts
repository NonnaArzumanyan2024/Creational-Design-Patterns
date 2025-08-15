/*
Database Gym Membership Singleton Example

Singleton Design Pattern:
- A creational pattern that ensures a class has only one instance.
- Provides a global point of access to that instance.
- Useful for shared resources (like configuration, logging, or managers).

How it works in this code:
1. `DatabaseGymMembership` is the singleton class.
2. Private constructor prevents creating multiple instances with `new`.
3. `getInstance()` method provides access to the single instance.
4. Demonstrates that any attempt to get another instance returns the same object.

Benefits demonstrated here:
- Only one DatabaseGymMembership exists at any time.
- Shared state is consistent across the app.
- Centralized control over important resources.
- Beginner-friendly example of Singleton in TypeScript.
*/




// ================= Singleton =================
class DatabaseGymMembership {
    private static instance: DatabaseGymMembership | null = null;  // Holds the single instance
    public totalMembers: number = 0;                               // Example state

    // Private constructor prevents external instantiation
    private constructor() {
        // Constructor is intentionally empty for Singleton pattern
    }

    // Public method to get the single instance
    public static getInstance(): DatabaseGymMembership {
        if (this.instance === null) {
            this.instance = new DatabaseGymMembership(); // Create instance only once
        }
        return this.instance; // Return existing instance
    }

    // Example method to add a member
    addMember(): void {
        this.totalMembers += 1;
        console.log(`Member added! Total members: ${this.totalMembers}`);
    }
}


// ================= Usage Example =================

// Get the singleton instance
const db1 = DatabaseGymMembership.getInstance();
db1.addMember(); // Member added! Total members: 1

// Attempt to get another instance
const db2 = DatabaseGymMembership.getInstance();
db2.addMember(); // Member added! Total members: 2

// Check if both instances are the same
console.log(db1 === db2); // true
