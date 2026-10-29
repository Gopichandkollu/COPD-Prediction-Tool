"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Stethoscope, Settings, Wind, Cigarette } from "lucide-react";
import { Button } from "components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { useState } from "react";

const formSchema = z.object({
  fev1: z.string().min(1, "FEV1 is required"),
  fev1Pred: z.string().min(1, "Predicted FEV1 is required"),
  symptomScore: z.string().min(1, "Symptom score is required"),
  smokingHistory: z.string().min(1, "Smoking history is required"),
});

export default function PredictPage() {
  const [prediction, setPrediction] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fev1: "",
      fev1Pred: "",
      symptomScore: "",
      smokingHistory: "",
    },
  });

  function identifyCOPDSeverity(fev1: number, fev1Pred: number) {
    const fev1Percentage = (fev1 / fev1Pred) * 100;
    if (fev1Percentage >= 80) return "Mild (Stage 1)";
    if (fev1Percentage >= 50) return "Moderate (Stage 2)";
    if (fev1Percentage >= 30) return "Severe (Stage 3)";
    return "Very Severe (Stage 4)";
  }

  function identifySymptoms(symptomScore: number) {
    const scores = [
      "Minimal symptoms (mMRC 0)",
      "Mild symptoms (mMRC 1)",
      "Moderate symptoms (mMRC 2)",
      "Severe symptoms (mMRC 3)",
      "Very severe symptoms (mMRC 4)",
    ];
    return scores[symptomScore] || "Invalid symptom score";
  }

  function smokingRisk(smokingHistory: string) {
    switch (smokingHistory) {
      case "current":
        return "Current smoker - High risk for COPD";
      case "former":
        return "Ex-smoker - Risk based on past smoking history";
      case "never":
        return "Non-smoker - Lower risk for COPD, but other factors still important";
      default:
        return "Unknown smoking history";
    }
  }

  function assessRisk(fev1Percentage: number, symptomScore: number) {
    if (fev1Percentage >= 50 && symptomScore <= 2)
      return "Low risk for exacerbation";
    if (fev1Percentage < 50 && symptomScore > 2)
      return "High risk for exacerbation";
    return "Moderate risk for exacerbation";
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const fev1 = parseFloat(values.fev1);
    const fev1Pred = parseFloat(values.fev1Pred);
    const symptomScore = parseInt(values.symptomScore);
    const fev1Percentage = (fev1 / fev1Pred) * 100;

    setPrediction({
      severity: identifyCOPDSeverity(fev1, fev1Pred),
      symptoms: identifySymptoms(symptomScore),
      smokingStatus: smokingRisk(values.smokingHistory),
      riskStatus: assessRisk(fev1Percentage, symptomScore),
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-100 dark:from-green-950 dark:to-teal-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-green-900 dark:text-green-100 mb-2">
              COPD Prediction Tool
            </h1>
            <p className="text-green-700 dark:text-green-300">
              Enter patient data to predict COPD severity and risk factors
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur p-6 rounded-lg shadow-lg"
            >
              <FormField
                control={form.control}
                name="fev1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FEV1 (Forced Expiratory Volume in 1s)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Enter FEV1 value"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fev1Pred"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Predicted FEV1</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Enter predicted FEV1 value"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="symptomScore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Symptom Score (mMRC)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select symptom score" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">0 - Minimal</SelectItem>
                        <SelectItem value="1">1 - Mild</SelectItem>
                        <SelectItem value="2">2 - Moderate</SelectItem>
                        <SelectItem value="3">3 - Severe</SelectItem>
                        <SelectItem value="4">4 - Very Severe</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="smokingHistory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Smoking History</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select smoking history" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="current">Current Smoker</SelectItem>
                        <SelectItem value="former">Former Smoker</SelectItem>
                        <SelectItem value="never">Never Smoked</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Predict COPD Risk
              </Button>
            </form>
          </Form>

          {prediction && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Stethoscope className="h-5 w-5" />
                    COPD Severity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{prediction.severity}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Settings className="h-5 w-5" />
                    Symptoms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{prediction.symptoms}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Cigarette className="h-5 w-5" />
                    Smoking Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{prediction.smokingStatus}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Wind className="h-5 w-5" />
                    Risk Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{prediction.riskStatus}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
