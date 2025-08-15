/*
Gym Membership Prototype Example

Prototype Design Pattern:
- A creational design pattern that lets you create new objects by cloning existing ones.
- Useful when creating a new object from scratch is expensive or complicated.
- Promotes reusability and avoids repeating setup code.

How it works in this code:
1. `GymMembership` is the product class representing a member's subscription.
2. It has a `clone()` method that creates a copy of the membership.
3. You can clone an existing membership and change only the properties you want.
4. Demonstrates creating multiple memberships efficiently without repeating code.

Benefits demonstrated here:
- Quickly create similar memberships with small differences.
- Avoids repeating setup code.
- Shows flexibility in creating variations of objects.
*/




// ================= Product =================

// Class representing a Gym Membership
class GymMembership {
    public hasPersonalTraining: boolean; // Personal training feature
    public hasSwimmingPool: boolean;     // Swimming pool access
    public hasDietPlan: boolean;         // Diet plan feature
    public durationMonths: number;       // Membership duration in months
    public memberName: string;           // Name of the member

    constructor(
        memberName: string,
        hasPersonalTraining: boolean = false,
        hasSwimmingPool: boolean = false,
        hasDietPlan: boolean = false,
        durationMonths: number = 1
    ) {
        // Assign properties from constructor
        this.memberName = memberName;            
        this.hasPersonalTraining = hasPersonalTraining; 
        this.hasSwimmingPool = hasSwimmingPool;         
        this.hasDietPlan = hasDietPlan;                 
        this.durationMonths = durationMonths;           
    }

    // Method to display membership details
    showInfo(): void {
        console.log(`Gym Membership for ${this.memberName}:`);
        console.log(`- Duration: ${this.durationMonths} month(s)`);                      // Show duration
        console.log(`- Personal Training: ${this.hasPersonalTraining ? "Yes" : "No"}`);  // Show personal training
        console.log(`- Swimming Pool Access: ${this.hasSwimmingPool ? "Yes" : "No"}`);   // Show pool access
        console.log(`- Diet Plan: ${this.hasDietPlan ? "Yes" : "No"}`);                  // Show diet plan
    }

    // Clone method to create a copy of this membership
    clone(): GymMembership {
        // Return a new GymMembership with the same properties
        return new GymMembership(
            this.memberName, 
            this.hasPersonalTraining,
            this.hasSwimmingPool,
            this.hasDietPlan,
            this.durationMonths
        );
    }
}


// ================= Usage Example =================

// Create an original premium membership
const originalMembership = new GymMembership(
    "Alice", // Member name
    true,    // Enable personal training
    true,    // Enable swimming pool access
    true,    // Enable diet plan
    12       // Duration: 12 months
);

originalMembership.showInfo(); // Show original membership info


// Clone the original membership for a new member
const clonedMembership = originalMembership.clone(); // Make a copy
clonedMembership.memberName = "Bob";                 // Change only the name
clonedMembership.showInfo();                         // Show cloned membership info


// Clone again and change duration for a short-term membership
const shortMembership = originalMembership.clone();  // Clone again
shortMembership.memberName = "Charlie";              // Set new member name
shortMembership.durationMonths = 3;                  // Change duration to 3 months
shortMembership.showInfo();                          // Show short membership info
