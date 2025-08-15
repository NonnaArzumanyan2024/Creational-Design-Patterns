/*
Gym Membership Builder Example

Builder Design Pattern:
- A creational pattern used to build complex objects step by step.
- Separates construction from representation.
- Useful when an object has optional features or many configurations.
- Promotes readable, maintainable, and flexible code.

How it works in this code:
1. GymMembership is the product class representing a member's subscription.
2. GymMembershipBuilder provides methods to set optional features step by step.
3. build() method returns the final GymMembership object.
4. Demonstrates creating memberships with different combinations of features.

Benefits demonstrated here:
- Flexible object creation with optional features.
- Fluent interface for readability.
- Clear separation between object construction and usage.
- Easy to extend: add new features without changing existing code.
*/




// ================= Product =================

// Class representing a Gym Membership
class GymMembership {
    public hasPersonalTraining: boolean; // Does the member have personal training?
    public hasSwimmingPool: boolean;     // Does the member have swimming pool access?
    public hasDietPlan: boolean;         // Does the member have a diet plan?
    public durationMonths: number;       // Duration of membership in months

    constructor(
        hasPersonalTraining: boolean,
        hasSwimmingPool: boolean,
        hasDietPlan: boolean,
        durationMonths: number
    ) {
        // Assign all properties
        this.hasPersonalTraining = hasPersonalTraining;
        this.hasSwimmingPool = hasSwimmingPool;
        this.hasDietPlan = hasDietPlan;
        this.durationMonths = durationMonths;
    }

    // Method to display membership details
    showInfo(): void {
        console.log("Gym Membership Details:");
        console.log(`- Duration: ${this.durationMonths} month(s)`);
        console.log(`- Personal Training: ${this.hasPersonalTraining ? "Yes" : "No"}`);
        console.log(`- Swimming Pool Access: ${this.hasSwimmingPool ? "Yes" : "No"}`);
        console.log(`- Diet Plan: ${this.hasDietPlan ? " Yes" : " No"}`);
    }
}


// ================= Builder =================

// Builder class to create GymMembership objects step by step
class GymMembershipBuilder {
    private hasPersonalTraining: boolean = false; // Default: no personal training
    private hasSwimmingPool: boolean = false;     // Default: no swimming pool access
    private hasDietPlan: boolean = false;         // Default: no diet plan
    private durationMonths: number = 1;           // Default: 1 month

    // Add personal training feature
    addPersonalTraining(): GymMembershipBuilder {
        this.hasPersonalTraining = true;
        return this; // Return builder to allow chaining
    }

    // Add swimming pool access feature
    addSwimmingPool(): GymMembershipBuilder {
        this.hasSwimmingPool = true;
        return this; // Return builder to allow chaining
    }

    // Add diet plan feature
    addDietPlan(): GymMembershipBuilder {
        this.hasDietPlan = true;
        return this; // Return builder to allow chaining
    }

    // Set duration of membership
    setDuration(months: number): GymMembershipBuilder {
        this.durationMonths = months;
        return this; // Return builder to allow chaining
    }

    // Build the final GymMembership object
    build(): GymMembership {
        return new GymMembership(
            this.hasPersonalTraining,
            this.hasSwimmingPool,
            this.hasDietPlan,
            this.durationMonths
        );
    }
}


// ================= Usage Example =================

// Create a basic membership (3 months, no extra features)
const basicMembership = new GymMembershipBuilder()
    .setDuration(3)   // Set duration
    .build();         // Build the object

// Create a premium membership (12 months with all features)
const premiumMembership = new GymMembershipBuilder()
    .setDuration(12)      // Set duration
    .addPersonalTraining() // Add personal training
    .addSwimmingPool()     // Add swimming pool access
    .addDietPlan()         // Add diet plan
    .build();              // Build the object



// Show details of basic membership
basicMembership.showInfo();
// Output:
// Gym Membership Details:
// - Duration: 3 month(s)
// - Personal Training:  No
// - Swimming Pool Access:  No
// - Diet Plan:  No



// Show details of premium membership
premiumMembership.showInfo();
// Output:
// Gym Membership Details:
// - Duration: 12 month(s)
// - Personal Training:  Yes
// - Swimming Pool Access:  Yes
// - Diet Plan:  Yes
