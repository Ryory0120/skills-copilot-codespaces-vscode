function skillsMember() {
  return {
    name: "skillsMember",
    description: "Get skills member",
    parameters: {
      type: "object",
      properties: {
        userId: {
          type: "string",
          description: "User ID",
        },
        skillId: {
          type: "string",
          description: "Skill ID",
        },
      },
      required: ["userId", "skillId"],
    },
  };
}