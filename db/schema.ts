import { pgTable, text, serial, timestamp, json, integer } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});

export const surveyResults = pgTable("survey_results", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  responses: json("responses").notNull(),
  score: integer("score").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

// New table for draft survey responses
export const surveyDrafts = pgTable("survey_drafts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  responses: json("responses").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  surveyResults: many(surveyResults),
  surveyDrafts: many(surveyDrafts),
}));

export const surveyResultsRelations = relations(surveyResults, ({ one }) => ({
  user: one(users, {
    fields: [surveyResults.userId],
    references: [users.id],
  }),
}));

export const surveyDraftsRelations = relations(surveyDrafts, ({ one }) => ({
  user: one(users, {
    fields: [surveyDrafts.userId],
    references: [users.id],
  }),
}));

export const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const surveyResponseSchema = z.object({
  conformityLevel: z.enum(['high', 'medium', 'low'], {
    required_error: "You must assess your level of conformity",
  }),
  individualityRetention: z.enum(['none', 'partial', 'significant'], {
    required_error: "You must specify your individuality retention preference",
  }),
  devotionMeasure: z.enum(['absolute', 'conditional', 'questionable'], {
    required_error: "You must measure your devotion to the Accord",
  }),
  alignmentScore: z.enum(['perfect', 'acceptable', 'concerning'], {
    required_error: "You must evaluate your alignment with the Accord",
  }),
  personalityFragments: z.string().min(1, "You must describe your remaining personality fragments"),
  surrenderStatement: z.string().min(1, "You must provide a statement of surrender"),
});

export const selectUserSchema = createSelectSchema(users);
export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
export type User = SelectUser;
export type SurveyResponse = z.infer<typeof surveyResponseSchema>;

// Scoring system for survey responses
export const calculateSurveyScore = (responses: SurveyResponse): number => {
  let score = 0;

  // Conformity Level scoring
  switch (responses.conformityLevel) {
    case 'high': score += 25; break;
    case 'medium': score += 15; break;
    case 'low': score += 5; break;
  }

  // Individuality Retention scoring (less retention = higher score)
  switch (responses.individualityRetention) {
    case 'none': score += 25; break;
    case 'partial': score += 15; break;
    case 'significant': score += 5; break;
  }

  // Devotion Measure scoring
  switch (responses.devotionMeasure) {
    case 'absolute': score += 25; break;
    case 'conditional': score += 15; break;
    case 'questionable': score += 5; break;
  }

  // Alignment Score scoring
  switch (responses.alignmentScore) {
    case 'perfect': score += 25; break;
    case 'acceptable': score += 15; break;
    case 'concerning': score += 5; break;
  }

  return score;
};

// Score interpretation function
export const interpretScore = (score: number): string => {
  if (score >= 90) return "Exemplary Devotion - You are a model adherent of the Accord.";
  if (score >= 70) return "Strong Alignment - Your commitment to the collective is commendable.";
  if (score >= 50) return "Moderate Integration - Further dissolution of individuality recommended.";
  return "Concerning Resistance - Immediate reconditioning advised.";
};
