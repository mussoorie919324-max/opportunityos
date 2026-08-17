// OpportunityOS — Opportunity Engine
// Step 2: Basic opportunity intelligence layer

const opportunityEngine = {

  analyze(query) {

    const text = query.toLowerCase().trim();

    if (!text) {
      return {
        title: "No opportunity entered",
        message: "Please describe what you are looking for."
      };
    }

    let category = "General Opportunity";
    let icon = "🌍";

    if (
      text.includes("student") ||
      text.includes("college") ||
      text.includes("study") ||
      text.includes("internship")
    ) {
      category = "Student Opportunity";
      icon = "🎓";
    }

    else if (
      text.includes("job") ||
      text.includes("work") ||
      text.includes("career") ||
      text.includes("employment")
    ) {
      category = "Work Opportunity";
      icon = "💼";
    }

    else if (
      text.includes("freelance") ||
      text.includes("client") ||
      text.includes("service")
    ) {
      category = "Freelance Opportunity";
      icon = "🧑‍💻";
    }

    else if (
      text.includes("business") ||
      text.includes("startup") ||
      text.includes("company") ||
      text.includes("sell")
    ) {
      category = "Business Opportunity";
      icon = "🚀";
    }

    else if (
      text.includes("ai") ||
      text.includes("artificial intelligence") ||
      text.includes("automation")
    ) {
      category = "AI Opportunity";
      icon = "🤖";
    }

    else if (
      text.includes("local") ||
      text.includes("offline") ||
      text.includes("shop") ||
      text.includes("service")
    ) {
      category = "Local / Offline Opportunity";
      icon = "🏪";
    }

    return {

      query: query,

      title: category,

      icon: icon,

      demand: "To be researched",

      skills: [
        "Relevant skills will be identified",
        "Skill gap analysis will be added",
        "Future demand analysis will be added"
      ],

      fit: "Personal fit analysis coming next",

      risk: "Risk verification will be connected",

      nextStep:
        "OpportunityOS will generate a personalized next step.",

      status: "Engine initialized"

    };

  }

};
