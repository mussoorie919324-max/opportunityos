// OpportunityOS — Opportunity Engine v1
// Core opportunity analysis prototype

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

    // CATEGORY DETECTION
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
      text.includes("job") ||
      text.includes("work") ||
      text.includes("career") ||
      text.includes("employment")
    ) {
      category = "Work Opportunity";
      icon = "💼";
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

    // DEFAULT INTELLIGENCE PROFILE
    let demand = "Medium";
    let earning = "Moderate";
    let competition = "Medium";
    let difficulty = "Medium";
    let risk = "Medium";

    // AI / AUTOMATION
    if (
      text.includes("ai") ||
      text.includes("artificial intelligence") ||
      text.includes("automation")
    ) {
      demand = "High";
      earning = "High";
      competition = "High";
      difficulty = "Medium";
      risk = "Medium";
    }

    // FREELANCING
    if (
      text.includes("freelance") ||
      text.includes("client")
    ) {
      demand = "High";
      earning = "Variable";
      competition = "High";
      difficulty = "Medium";
      risk = "Medium";
    }

    // BUSINESS
    if (
      text.includes("business") ||
      text.includes("startup")
    ) {
      demand = "Variable";
      earning = "High";
      competition = "High";
      difficulty = "High";
      risk = "High";
    }

    // STUDENT
    if (
      text.includes("student") ||
      text.includes("internship")
    ) {
      demand = "High";
      earning = "Low–Moderate";
      competition = "Medium";
      difficulty = "Low–Medium";
      risk = "Low";
    }

    const skills = [];

    if (
      text.includes("ai") ||
      text.includes("automation")
    ) {
      skills.push(
        "AI tools",
        "Automation",
        "Problem solving"
      );
    }

    if (
      text.includes("freelance") ||
      text.includes("client") ||
      text.includes("service")
    ) {
      skills.push(
        "Communication",
        "Client management",
        "Service delivery"
      );
    }

    if (
      text.includes("business") ||
      text.includes("startup")
    ) {
      skills.push(
        "Market research",
        "Sales",
        "Business strategy"
      );
    }

    if (skills.length === 0) {
      skills.push(
        "Research",
        "Communication",
        "Problem solving"
      );
    }

    // OPPORTUNITY SCORE
    let score = 50;

    if (demand === "High") score += 15;
    if (earning === "High") score += 15;
    if (competition === "Low") score += 10;
    if (difficulty === "Low") score += 5;
    if (risk === "Low") score += 5;

    if (score > 100) score = 100;

    return {

      query: query,

      title: category,

      icon: icon,

      opportunityScore: score,

      demand: demand,

      earning: earning,

      competition: competition,

      difficulty: difficulty,

      skills: skills,

      fit:
        "Personal fit will improve after OpportunityOS learns your goals, skills and preferences.",

      risk:
        risk + " — deeper verification will be added in the verification layer.",

      nextStep:
        "Start by validating demand, required skills and the fastest practical path before investing money.",

      status: "Opportunity Engine v1"

    };

  }

};
