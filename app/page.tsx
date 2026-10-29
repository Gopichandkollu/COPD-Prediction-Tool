import { Button } from "components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { Stethoscope, Brain, Activity, Heart } from "lucide-react";
import Link from "next/link";
import CopdInfo from './copd-info'; // Importing the new component

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            COPD Prediction Tool
          </h1>
          <p className="text-xl text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
            Advanced AI-powered COPD prediction and risk assessment using state-of-the-art machine learning algorithms
          </p>
          <Link href="/predict">
            <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
              Start Prediction
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <Brain className="h-5 w-5" />
                AI-Powered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced machine learning algorithms for accurate predictions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <Activity className="h-5 w-5" />
                Real-time Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Instant results and risk assessment for quick decision making
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                <Heart className="h-5 w-5" />
                Patient-Centric
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Personalized predictions based on individual patient data
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                <Stethoscope className="h-5 w-5" />
                Clinical Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Based on established medical guidelines and research
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Include the new COPD information section */}
        <CopdInfo />
      </div>
    </div>
  );
}
