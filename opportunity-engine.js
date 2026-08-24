// OpportunityOS — Opportunity Engine v2
// Opportunity Profile + Evidence/Verification Ready Architecture
//
// IMPORTANT:
// - No claim is marked "verified" without evidence.
// - v1-compatible fields are preserved for the existing frontend.
// - Evidence/database integration will be added in the next stage.

const opportunityEngine = {

  analyze(query) {

    const text = String(query || "").toLowerCase().trim();

    if (!text) {
      return {
        title: "No opportunity entered",
        message: "Please describe what you are looking for."
      };
    }

    // ============================================
    // BASIC OPPORTUNITY DISCOVERY
    // ============================================

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
      text.includes("shop")
    ) {
      category = "Local / Offline Opportunity";
      icon = "🏪";
    }

    // ============================================
    // SKILLS
    // ============================================

    const skills = [];

    if (
      text.includes("ai") ||
      text.includes("artificial intelligence") ||
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
      text.includes("startup") ||
      text.includes("company")
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

    // ============================================
    // V2 PROFILE
    // ============================================
    //
    // IMPORTANT:
    // These values are intentionally not presented
    // as verified market intelligence.
    //
    // Evidence layer will populate them later.

    const profile = {

      demand: {
        value: null,
        status: "needs_verification",
        confidence: 0
      },

      earning: {
        value: null,
        status: "needs_verification",
        confidence: 0
      },

      competition: {
        value: null,
        status: "needs_verification",
        confidence: 0
      },

      difficulty: {
        value: null,
        status: "needs_verification",
        confidence: 0
      },

      risk: {
        value: null,
        status: "needs_verification",
        confidence: 0
      },

      trend: {
        value: null,
        status: "needs_verification",
        confidence: 0
      }

    };

    // ============================================
    // CLAIMS
    // ============================================

    const claims = [];

    // We create claim placeholders only.
    // No claim is treated as verified yet.

    claims.push(
  {
    claimType: "demand",
    claimText:
      `Demand for ${query} requires current market evidence.`,
    confidence: 0,
    verificationStatus: "unverified",
    evidenceIds: []
  },

      {
        claimType: "earning",
        claimText: "Earning potential requires evidence verification.",
        confidence: 0,
        verificationStatus: "unverified",
        evidenceIds: []
      },

      {
        claimType: "competition",
        claimText: "Competition level requires evidence verification.",
        confidence: 0,
        verificationStatus: "unverified",
        evidenceIds: []
      },

      {
        claimType: "difficulty",
        claimText: "Difficulty level requires evidence verification.",
        confidence: 0,
        verificationStatus: "unverified",
        evidenceIds: []
      },

      {
        claimType: "risk",
        claimText: "Risk level requires evidence verification.",
        confidence: 0,
        verificationStatus: "unverified",
        evidenceIds: []
      },

      {
        claimType: "trend",
        claimText: "Market trend requires evidence verification.",
        confidence: 0,
        verificationStatus: "unverified",
        evidenceIds: []
      }
    );

    // ============================================
    // VERIFICATION
    // ============================================

    const verification = {
      status: "unverified",
      confidence: 0
    };

    // ============================================
    // DATA QUALITY
    // ============================================

    const dataQuality = "insufficient_evidence";

    // ============================================
    // BEST NEXT ACTION
    // ============================================

    const bestNextAction =
      "Validate demand, earning potential, competition, required skills and risk using reliable evidence before investing money.";

    // ============================================
    // V1 COMPATIBILITY
    // ============================================
    //
    // These fields are preserved so the current
    // frontend does not immediately break.
    //
    // They are NOT presented as verified intelligence.

    const compatibilityValue = "Needs Verification";

    return {

      // ------------------------------------------
      // Original query
      // ------------------------------------------

      query: query,

      // ------------------------------------------
      // V2 Opportunity
      // ------------------------------------------

      opportunity: {
        title: category,
        category: category,
        description:
          "Opportunity profile generated by OpportunityOS. Market intelligence requires evidence verification.",
        skills: skills,
        icon: icon
      },

      // ------------------------------------------
      // V2 Profile
      // ------------------------------------------

      profile: profile,

      // ------------------------------------------
      // Claims
      // ------------------------------------------

      claims: claims,

      // ------------------------------------------
      // Verification
      // ------------------------------------------

      verification: verification,

      // ------------------------------------------
      // Score
      // ------------------------------------------

      opportunityScore: null,

      // ------------------------------------------
      // Action
      // ------------------------------------------

      bestNextAction: bestNextAction,

      // ------------------------------------------
      // Data quality
      // ------------------------------------------

      dataQuality: dataQuality,

      // ------------------------------------------
      // V1 compatibility fields
      // ------------------------------------------

      title: category,

      icon: icon,

      demand: compatibilityValue,

      earning: compatibilityValue,

      competition: compatibilityValue,

      difficulty: compatibilityValue,

      risk:
        "Needs verification — reliable evidence will be connected through the verification layer.",

      skills: skills,

      fit:
        "Personal fit will improve after OpportunityOS learns your goals, skills and preferences.",

      nextStep: bestNextAction,

      status: "Opportunity Engine v2 — Evidence Ready"

    };

  }

};
