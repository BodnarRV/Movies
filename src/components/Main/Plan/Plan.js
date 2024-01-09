import React from "react";
import './Plan.css'
import PlanTab from "./PlanTab/PlanTab";

function Plan() {
    const plansArray = [
        {
            "title": "Starter",
            "price": "Free",
            "buttonTitle": "Register",
            "children": ["7 days", "720p Resolution", "Limited Availability", "Desktop Only", "Limited Support"]
        },
        {
            "title": "Premium",
            "price": "$19.99",
            "buttonTitle": "Choose plan",
            "children": ["1 month", "Full HD", "Limited Availability", "TV & Desktop", "24/7 Support"]
        },
        {
            "title": "Cinematic",
            "price": "$39.99",
            "buttonTitle": "Choose plan",
            "children": ["2 month", "Ultra HD", "Limited Availability", "Any Device", "24/7 Support"]
        },
    ]


    return (
        <section className="plan">
            <div className="container">
                <h3 className="container__plan-title">Select Your Plan</h3>
                <div className="container__plan-items">
                    {plansArray.map((plan, index) =>
                        <PlanTab
                            key={index}
                            title={plan.title}
                            price={plan.price}
                            buttonTitle={plan.buttonTitle}
                            children={plan.children}
                        />
                    )}
                </div>
            </div>
        </section>

    )
}

export default Plan